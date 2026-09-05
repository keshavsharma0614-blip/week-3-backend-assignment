import { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "https://scaling-umbrella-g4wj69j5g66q2pww7-3000.app.github.dev";

function Profile() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("Loading profile...");
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState("");

  const loadProfile = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login first");
      return;
    }

    try {
      const res = await axios.get(`${API_URL}/api/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUser(res.data);
      setMessage("");
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "Profile load failed"
      );
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      setMessage("Please select an image");
      return;
    }

    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("image", selectedImage);

    try {
      const res = await axios.post(
        `${API_URL}/api/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setUser(res.data.user);
      setMessage("Image uploaded successfully");
      setSelectedImage(null);
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "Image upload failed"
      );
    }
  };

  return (
    <div>
      <h2>Profile</h2>

      {message && <p>{message}</p>}

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>

          {user.image && (
            <div>
              <p>Uploaded Image:</p>
              <img
                src={`${API_URL}${user.image}`}
                alt="Profile"
                width="200"
              />
            </div>
          )}

          <h3>Upload Image</h3>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {preview && (
            <div>
              <p>Preview:</p>
              <img
                src={preview}
                alt="Preview"
                width="200"
              />
            </div>
          )}

          <br />

          <button onClick={handleUpload}>
            Upload Image
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
