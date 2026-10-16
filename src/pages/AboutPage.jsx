import React from "react";
import aboutFoto from "../assets/aboutFoto.png";
import ModalEdit from "../components/ModalEdit";
export default function AboutPage() {
  return (
    <div className="about">
      <div className="hero-section">
        <section>
          <p className="hero-section-text">
            Наше приложение помогает организовать задачи, следить за прогрессом
            и достигать целей каждый день — легко, удобно и без лишнего хаоса.
          </p>
          <button>перейти к задачам</button>
        </section>
        <section>
          <img src={aboutFoto} alt="" />
        </section>
      </div>
      <div className="value-section">
        <h1 className="value-section-h1">Наши ценности</h1>
        <p className="value-section-p">
          Коротко и ясно о том, что делает наше приложение удобным, полезным и
          незаменимым для вашего ежедневного планирования.
        </p>
      </div>
      <div className="values-grid">
        {
          <ModalEdit
            h1="01."
            h3="Просто и эффективно"
            p="Наше приложение объединяет удобство и мощный функционал: создавайте задачи, отмечайте выполненные и управляйте своим временем."
          />
        }
        {
          <ModalEdit
            h1="02."
            h3="Умный трекинг"
            p="Система отслеживания помогает видеть прогресс, контролировать привычки и структурировать день в одном месте."
          />
        }
        {
          <ModalEdit
            h1="03."
            h3="Современный дизайн"
            p="Интерфейс, который идеально смотрится и работает на любом устройстве — понятно, аккуратно и приятно для глаз."
          />
        }
        {
          <ModalEdit
            h1="04."
            h3="Персональные настройки"
            p="Гибкие категории, напоминания и приоритеты — настройте приложение так, как удобно именно вам."
          />
        }
      </div>
    </div>
  );
}
