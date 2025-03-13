import React from 'react';
import './AddressPage.scss';

export default function AddressPage() {
    return (
        <section className="address-page">
            <div className="centered-container">
                <h2 className="section-title">Контакты и адрес</h2>

                <div className="content-wrapper">
                    {/* Контактная информация */}
                    <div className="contact-info">
                        <h3>Тренажерный зал ADRENALINEBOOST</h3>
                        <p>Oxford Street, Вестминстер, Лондон</p>
                        <p>Ежедневно 7:00 - 23:00</p>
                        <p>Телефон: <a href="tel:+441234567890">+44 123 456 7890</a></p>
                        <p>Email: <a href="mailto:mail@company.ru">mail@company.ru</a></p>
                        <p>ИНН: 000000000</p>
                        <p>ОГРН: 000000000</p>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </div>

                    {/* Карта */}
                    <div className="map-container">
                        <iframe
                            title="ADRENALINEBOOST Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.036924012688!2d-0.1440186842296405!3d51.51541777963595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2sru!4v1633012345678!5m2!1sen!2sru"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}