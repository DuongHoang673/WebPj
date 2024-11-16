"use client"
import React, { useState } from 'react';
import './Payment.css';

// Interface cho cấu trúc dữ liệu phim
interface Movie {
  moviename: string;
  date: Date;
  language: string;
  type: string;
  cost: string;
  screens: { name: string; location: string }[];
}

export const PaymentPage: React.FC = () => {
  const movie: Movie = {
    moviename: 'Venom',
    date: new Date(),
    language: 'Vietnamese',
    type: 'Science Fiction/Action',
    cost: "200.000VND",
    screens: [
      { name: 'Screen 1', location: 'Lotte Cinema, Hanoi' },
      { name: 'Screen 2', location: 'Lotte Cinema, Hanoi' },
      { name: 'Screen 3', location: 'Lotte Cinema, Hanoi' },
    ],
  };

  const [selectedScreen, setSelectedScreen] = useState<string>('');
  const [isPaid, setIsPaid] = useState<boolean>(false);

  const handlePayment = () => {
    if (!selectedScreen) {
      alert('Vui lòng chọn màn hình chiếu!');
      return;
    }
    setIsPaid(true);
    alert('Thanh toán thành công!');
  };

  return (
    <div className="payment-page">
      <h1>Thanh toán vé xem phim</h1>
      <div className="movie-details">
        <p><strong>Tên phim:</strong> {movie.moviename}</p>
        <p><strong>Ngày chiếu:</strong> {movie.date.toDateString()}</p>
        <p><strong>Ngôn ngữ:</strong> {movie.language}</p>
        <p><strong>Thể loại:</strong> {movie.type}</p>
        <p><strong>Giá vé:</strong> {movie.cost}</p>
      </div>

      <div className="screen-selection">
        <label><strong>Chọn màn hình chiếu:</strong></label>
        <select value={selectedScreen} onChange={(e) => setSelectedScreen(e.target.value)}>
          <option value="">-- Chọn màn hình --</option>
          {movie.screens.map((screen, index) => (
            <option key={index} value={screen.name}>
              {screen.name} - {screen.location}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handlePayment} disabled={isPaid} className="pay-button">
        {isPaid ? 'Đã thanh toán' : 'Thanh toán'}
      </button>
    </div>
  );
};

export default PaymentPage;
