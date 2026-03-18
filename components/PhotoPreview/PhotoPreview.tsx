import React from "react";
import Modal from "../Modal/Modal";
import { useRouter } from "next/navigation";

interface PhotoPreviewProps {
  photo: string;
  onClose: () => void;
}

// Photo Preview Component
const PhotoPreview = ({ photo, onClose }: PhotoPreviewProps) => {
  return (
    <Modal onClose={onClose}>
      <div>
        <img src={photo} alt="Preview" />
      </div>
    </Modal>
  );
};

export default PhotoPreview;
