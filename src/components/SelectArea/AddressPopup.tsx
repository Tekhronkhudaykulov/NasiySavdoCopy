import { FaSearch, FaTimes } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { useState } from "react";

// Define a custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Props {
  onClose: () => void;
}

const AddressPopup = ({ onClose }: Props) => {
  const [addressInput, setAddressInput] = useState("");

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressInput(e.target.value);
  };

  return (
    <div className="address-popup">
      <div className="flex justify-between items-center mb-5">
        <span className="font-medium text-[20px] text-black">
          Адрес доставки
        </span>
        <FaTimes
          className="cursor-pointer text-txtSecondary2"
          onClick={onClose}
        />
      </div>
      <div className="flex items-center gap-2 mb-5">
        <div className="flex items-center w-full bg-buttonBg rounded-lg p-[15px]">
          <input
            type="text"
            className="w-full text-[14px] text-txtSecondary2 bg-transparent border-0 outline-none"
            placeholder="Введите адрес"
            value={addressInput}
            onChange={handleAddressChange}
          />
          <FaSearch className="text-txtSecondary2" />
        </div>

        <button className="bg-[#02737326] text-darkGreen rounded-lg p-[14px_32px] text-[14px]">
          Выбрать
        </button>
      </div>
      <MapContainer
        center={[41.2995, 69.2401]} // Coordinates for Tashkent
        zoom={12}
        scrollWheelZoom={false}
        className="rounded-lg w-[450px] aspect-square"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[41.2995, 69.2401]} icon={customIcon}>
          <Popup>Ташкент</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AddressPopup;
