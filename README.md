# ComEduQ&A — ระบบถาม-ตอบสำหรับภาควิชาคอมพิวเตอร์ศึกษา

> **Q&A System for Department of Computer Education (KMUTNB)**
> ระบบถาม-ตอบออนไลน์สำหรับภาควิชาคอมพิวเตอร์ศึกษา มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ

---

## 📋 สารบัญ / Table of Contents

- [เกี่ยวกับโปรเจ็ค / About](#เกี่ยวกับโปรเจ็ค--about)
- [เทคโนโลยีที่ใช้ / Tech Stack](#เทคโนโลยีที่ใช้--tech-stack)
- [ฟีเจอร์ / Features](#ฟีเจอร์--features)
- [โครงสร้างโปรเจ็ค / Project Structure](#โครงสร้างโปรเจ็ค--project-structure)
- [ฐานข้อมูล / Database Schema](#ฐานข้อมูล--database-schema)
- [การติดตั้ง / Installation](#การติดตั้ง--installation)
- [API Endpoints](#api-endpoints)
- [ภาพหน้าจอ / Screenshots](#ภาพหน้าจอ--screenshots)

---

## เกี่ยวกับโปรเจ็ค / About

**ภาษาไทย:**
ComEduQ&A เป็นระบบถาม-ตอบออนไลน์ที่พัฒนาขึ้นเพื่อใช้ภายในภาควิชาคอมพิวเตอร์ศึกษา รองรับผู้ใช้งาน 3 ระดับ ได้แก่ ผู้ใช้ทั่วไป เจ้าหน้าที่ และผู้ดูแลระบบ ผู้ใช้สามารถตั้งคำถาม แนบไฟล์ และรอรับคำตอบจากเจ้าหน้าที่ รวมถึงเรียกดู FAQ และสถิติต่าง ๆ

**English:**
ComEduQ&A is an online Q&A platform for the Department of Computer Education. It supports three user roles: Regular User, Officer, and Admin. Users can submit questions with file attachments, receive answers from officers, browse FAQs, and view statistics dashboards.

---

## เทคโนโลยีที่ใช้ / Tech Stack

### Backend (Server)
| เทคโนโลยี | เวอร์ชัน | การใช้งาน |
|-----------|---------|-----------|
| Node.js | ≥ 14 | Runtime |
| Express.js | ^4.17.2 | Web Framework |
| MySQL | — | Database |
| mysql (npm) | ^2.18.1 | MySQL Driver |
| bcryptjs | ^2.4.3 | Password Hashing |
| jsonwebtoken | ^8.5.1 | JWT Authentication |
| express-fileupload | ^1.3.1 | File Upload |
| dotenv | ^14.2.0 | Environment Variables |
| morgan | ^1.10.0 | HTTP Logger |
| cors | ^2.8.5 | CORS Middleware |
| nodemon | ^2.0.15 | Dev Auto-reload |

### Frontend (Client)
| เทคโนโลยี | เวอร์ชัน | การใช้งาน |
|-----------|---------|-----------|
| React | ^17.0.2 | UI Framework |
| React Router DOM | ^6.2.1 | Client-side Routing |
| Redux + react-redux | ^4.1.2 / ^7.2.6 | State Management |
| Axios | ^0.25.0 | HTTP Client |
| Bootstrap | ^5.1.3 | CSS Framework |
| React Bootstrap | ^2.1.2 | Bootstrap Components |
| Chart.js + react-chartjs-2 | ^3.7.1 / ^4.0.1 | Data Visualization |
| React Bootstrap Table | ^4.3.1 | Data Tables |
| React Toastify | ^8.1.1 | Notifications |
| Moment.js | ^2.29.1 | Date Formatting |
| react-textarea-autosize | ^8.4.0 | Auto-resize Textarea |
| react-simple-image-viewer | ^1.2.1 | Image Viewer |

---

## ฟีเจอร์ / Features

### 👤 ผู้ใช้ทั่วไป (User — lv_id: 3)
- ลงทะเบียน / เข้าสู่ระบบ / ลืมรหัสผ่าน
- ตั้งคำถามพร้อมแนบไฟล์ (JPG, PNG, PDF ขนาดไม่เกิน 200 MB)
- แก้ไข / ลบคำถามที่ยังไม่ได้รับคำตอบ
- ดูประวัติคำถามและสถานะ
- แก้ไขข้อมูลส่วนตัวและรูปโปรไฟล์
- เปลี่ยนรหัสผ่าน

### 🛡️ เจ้าหน้าที่ (Officer — lv_id: 2)
- ดูคำถามแยกตามหมวดหมู่
- ตอบคำถาม (พร้อมลิงก์อ้างอิง)
- จัดการ FAQ (เพิ่ม / แก้ไข / ลบ)
- ดูสถิติการตอบคำถามของตนเอง
- แดชบอร์ดพร้อม Chart แสดงข้อมูล

### 👑 ผู้ดูแลระบบ (Admin — lv_id: 1)
- จัดการผู้ใช้ทั้งหมด (เปิด/ปิดการใช้งาน)
- จัดการหมวดหมู่คำถาม
- จัดการระดับการเข้าถึง
- ดูสถิติภาพรวมระบบ
- แดชบอร์ดสมาชิกและคำถาม

### 🌐 สาธารณะ (Public)
- ดูคำถามทั่วไป (พร้อม infinite scroll)
- ดู FAQ แยกตามหมวดหมู่ (accordion)
- ดูสถิติสรุปของระบบ

---

## โครงสร้างโปรเจ็ค / Project Structure

```
qacedkmutnb/
├── server/                      # Express.js Backend
│   ├── configs/
│   │   └── db.js                # MySQL connection pool
│   ├── controllers/
│   │   ├── admin.js             # Admin business logic
│   │   ├── auth.js              # Auth (login, register, password)
│   │   ├── officer.js           # Officer business logic
│   │   ├── query.js             # Public queries & statistics
│   │   └── user.js              # User business logic
│   ├── middlewares/
│   │   └── auth.js              # JWT auth, officer/admin check
│   ├── Routes/
│   │   ├── admin.js             # /api/admin-*
│   │   ├── api.js               # /api/* (auth + queries)
│   │   ├── officer.js           # /api/officer-*
│   │   └── user.js              # /api/user-*
│   ├── img/
│   │   ├── qst/                 # Question attachments
│   │   └── user/                # User profile images
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── server.js                # Entry point (port 3300)
│
└── client/                      # React Frontend
    ├── public/
    └── src/
        ├── App.js               # Router & auth check on refresh
        ├── index.js             # Redux store init
        ├── components/
        │   ├── functions/       # Axios API call functions
        │   │   ├── admin.js
        │   │   ├── auth.js
        │   │   ├── officer.js
        │   │   ├── query.js
        │   │   └── user.js
        │   ├── pages/
        │   │   ├── Home.js      # Public home
        │   │   ├── FAQ.js       # Public FAQ
        │   │   ├── GeneralQuestions.js
        │   │   ├── auth/        # Login, Register, Password pages
        │   │   ├── user/        # User dashboard & question pages
        │   │   ├── officer/     # Officer dashboard & FAQ pages
        │   │   ├── admin/       # Admin dashboard & management pages
        │   │   ├── layouts/     # Header, Navbar, Footer
        │   │   └── tables/      # Reusable table component
        │   ├── reducers/
        │   │   └── userReducer.js  # Redux reducers
        │   └── routes/
        │       ├── AdminRoute.js
        │       ├── OfficerRoute.js
        │       └── UserRoute.js
        ├── .env                 # REACT_APP_API config
        └── package.json
```

---

## ฐานข้อมูล / Database Schema

> ฐานข้อมูล: `comedu_q_&_a` (MySQL)

```sql
-- ระดับการเข้าถึง / Access Levels
tbl_level (lv_id, lv_name)
  lv_id = 1 → Admin
  lv_id = 2 → Officer
  lv_id = 3 → User

-- สถานะ / Status
tbl_status (sta_id, sta_name)
  sta_id = 1 → Active
  sta_id = 2 → Disabled
  sta_id = 3 → Waiting (question unanswered)
  sta_id = 4 → Answered

-- สมาชิก / Members
tbl_member (mem_id, mem_user, mem_pwd, mem_name, mem_mail,
            mem_tal, mem_img, lv_id, sta_id, date_create, date_update)

-- หมวดหมู่คำถาม / Question Types
tbl_type (type_id, type_name)

-- คำถาม / Questions
tbl_question (qst_id, qst_title, qst_detail, qst_img, qst_name,
              qst_mail, qst_date, type_id, mem_id, sta_id, reply_id)

-- คำตอบ / Replies
tbl_reply (reply_id, reply_detail, reply_url, reply_date, qst_id, mem_id)

-- FAQ
tbl_faq (faq_id, faq_title, faq_detail, type_id)
```

---

## การติดตั้ง / Installation

### สิ่งที่ต้องมี / Prerequisites
- Node.js ≥ 14
- MySQL
- npm

### 1. Clone Repository

```bash
git clone <repository-url>
cd qacedkmutnb
```

### 2. ตั้งค่า Database / Setup Database

สร้างฐานข้อมูลใน MySQL:
```sql
CREATE DATABASE `comedu_q_&_a`;
```
จากนั้น import schema และข้อมูลเริ่มต้น (ถ้ามีไฟล์ `.sql`)

### 3. ตั้งค่า Server

```bash
cd server
npm install
```

แก้ไขไฟล์ `server/.env`:
```env
PORT = "3001"
USER_DB = "root"
PASSWORD_DB = ""
HOST_DB = "localhost"
DATABASE = "comedu_q_&_a"
```

รัน Server:
```bash
npm start
# Server จะรันที่ http://localhost:3300
```

### 4. ตั้งค่า Client

```bash
cd client
npm install
```

แก้ไขไฟล์ `client/.env` (สำหรับ local development):
```env
REACT_APP_API='http://localhost:3300/api'
REACT_APP_API_IMG='http://localhost:3300/qst_img'
REACT_APP_API_MEM_IMG='http://localhost:3300/mem_img'
```

รัน Client:
```bash
npm start
# Client จะรันที่ http://localhost:3000
```

---

## API Endpoints

Base URL: `http://localhost:3300/api`

> **Legend:**
> - 🔓 Public — ไม่ต้องการ Token
> - 🔒 Auth — ต้องการ JWT Token ใน header `authtoken`
> - 🛡️ Officer — ต้องการ Token + ระดับ Officer หรือ Admin
> - 👑 Admin — ต้องการ Token + ระดับ Admin เท่านั้น

---

### 🔑 Authentication

| Method | Path | Access | คำอธิบาย |
|--------|------|--------|---------|
| `POST` | `/register` | 🔓 | สมัครสมาชิก |
| `POST` | `/login` | 🔓 | เข้าสู่ระบบ (returns JWT token) |
| `POST` | `/forgot-password` | 🔓 | ค้นหาบัญชีด้วยอีเมล |
| `POST` | `/new-password` | 🔓 | ตั้งรหัสผ่านใหม่ |
| `POST` | `/current-user` | 🔒 | ดึงข้อมูล User ปัจจุบัน |
| `POST` | `/current-officer` | 🛡️ | ตรวจสอบสิทธิ์ Officer |
| `POST` | `/current-admin` | 👑 | ตรวจสอบสิทธิ์ Admin |

---

### 📊 Queries (ข้อมูลสาธารณะ / สถิติ)

| Method | Path | Access | คำอธิบาย |
|--------|------|--------|---------|
| `GET` | `/query-question-type` | 🔒 | ดึงหมวดหมู่คำถามทั้งหมด |
| `GET` | `/query-question-type-faq` | 🔓 | ดึงหมวดหมู่ FAQ (public) |
| `POST` | `/query-question-type-name` | 🔒 | ดึงชื่อหมวดหมู่ตาม type_id |
| `GET` | `/query-Level` | 🔒 | ดึงระดับการเข้าถึงทั้งหมด |
| `GET` | `/query-count-question-type` | 🔓 | นับคำถามรอตอบแยกตามหมวด |
| `GET` | `/query-count-faq-type` | 🔓 | นับ FAQ แยกตามหมวด |
| `POST` | `/query-read-faq-type` | 🔓 | ดึง FAQ ตาม type_id |
| `GET` | `/query-count-member` | 👑 | นับสมาชิกแยกตามระดับ |
| `GET` | `/query-count-question-no-ans` | 🛡️ | นับคำถามที่ยังไม่ได้ตอบ |
| `POST` | `/query-count-question-of-user` | 🔒 | นับคำถามของ User |
| `GET` | `/query-count-qusetion-type-all` | 🔓 | นับคำถามทั้งหมดแยกตามหมวด |
| `POST` | `/query-all-qusetion` | 🔓 | ดึงคำถามล่าสุด (มี limit) |

---

### 👤 User Operations

| Method | Path | Access | คำอธิบาย |
|--------|------|--------|---------|
| `POST` | `/user-add-question` | 🔒 | ตั้งคำถามใหม่ (รองรับ file upload) |
| `GET` | `/user-list-question` | 🔒 | ดูรายการคำถามของ User |
| `POST` | `/user-read-question` | 🔒 | ดูรายละเอียดคำถาม |
| `POST` | `/user-update-question` | 🔒 | แก้ไขคำถาม |
| `POST` | `/user-delete-question` | 🔒 | ลบคำถาม (เฉพาะที่ยังไม่ได้ตอบ) |
| `POST` | `/user-update-information` | 🔒 | แก้ไขข้อมูลส่วนตัว |
| `POST` | `/change-password` | 🔒 | เปลี่ยนรหัสผ่าน |

---

### 🛡️ Officer Operations

| Method | Path | Access | คำอธิบาย |
|--------|------|--------|---------|
| `POST` | `/officer-read-question-type` | 🛡️ | ดูคำถามตามหมวดหมู่ |
| `POST` | `/officer-read-question` | 🛡️ | ดูรายละเอียดคำถาม |
| `POST` | `/officer-reply-question` | 🛡️ | ตอบคำถาม |
| `POST` | `/officer-add-faq` | 🛡️ | เพิ่ม FAQ |
| `POST` | `/officer-read-FAQ-type` | 🛡️ | ดู FAQ ตามหมวด |
| `POST` | `/officer-read-FAQ` | 🛡️ | ดูรายละเอียด FAQ |
| `POST` | `/officer-update-FAQ` | 🛡️ | แก้ไข FAQ |
| `POST` | `/officer-delete-FAQ` | 🛡️ | ลบ FAQ |
| `POST` | `/officer-count-reply` | 🛡️ | ดูสถิติการตอบของ Officer |

---

### 👑 Admin Operations

| Method | Path | Access | คำอธิบาย |
|--------|------|--------|---------|
| `GET` | `/admin-list-user` | 👑 | ดูรายชื่อสมาชิกทั้งหมด |
| `POST` | `/admin-enable-and-disenable-member` | 👑 | เปิด/ปิดการใช้งานสมาชิก |
| `POST` | `/admin-read-level` | 👑 | ดูระดับการเข้าถึง |
| `POST` | `/admin-update-level` | 👑 | แก้ไขชื่อระดับ |
| `POST` | `/admin-read-question-type` | 👑 | ดูหมวดหมู่คำถาม |
| `POST` | `/admin-add-question-type` | 👑 | เพิ่มหมวดหมู่คำถาม |
| `POST` | `/admin-update-question-type` | 👑 | แก้ไขหมวดหมู่คำถาม |
| `POST` | `/admin-delete-question-type` | 👑 | ลบหมวดหมู่คำถาม |
| `GET` | `/admin-read-user/:id` | 👑 | ดูข้อมูลสมาชิกรายคน |
| `PUT` | `/admin-edit-user/:id` | 👑 | แก้ไขข้อมูลสมาชิก |
| `DELETE` | `/admin-delete-user/:id` | 👑 | ลบสมาชิก |

---

### 📁 Static Files (รูปภาพ)

| Path | คำอธิบาย |
|------|---------|
| `GET /qst_img/:filename` | รูปภาพ/ไฟล์แนบของคำถาม |
| `GET /mem_img/:filename` | รูปโปรไฟล์สมาชิก |

---

## ภาพหน้าจอ / Screenshots

> 📸 _ยังไม่มีภาพหน้าจอ — สามารถเพิ่มในภายหลังได้_

| หน้า | ภาพ |
|------|-----|
| หน้าแรก (Home) | _(placeholder)_ |
| หน้าเข้าสู่ระบบ (Login) | _(placeholder)_ |
| แดชบอร์ด User | _(placeholder)_ |
| แดชบอร์ด Officer | _(placeholder)_ |
| แดชบอร์ด Admin | _(placeholder)_ |
| หน้าตั้งคำถาม | _(placeholder)_ |
| หน้า FAQ | _(placeholder)_ |

---

## สิทธิ์การเข้าถึง / Role Summary

| ระดับ | lv_id | สิทธิ์ |
|-------|-------|--------|
| Admin | 1 | จัดการระบบทั้งหมด + สิทธิ์ Officer ทั้งหมด |
| Officer | 2 | ตอบคำถาม + จัดการ FAQ + ดูสถิติ |
| User | 3 | ตั้งคำถาม + ดู FAQ + แก้ไขโปรไฟล์ |
| Public | — | ดูคำถามทั่วไป + FAQ (อ่านอย่างเดียว) |

---

## ผู้พัฒนา / Developer

> _TCT-RA Capstone Project — Department of Computer Education, KMUTNB_

> นายรัชชานนท์ เสมสายัณห์

> นายวรวิทย์ อ๋องสกุล
---

*README generated for ComEduQ&A v1.0.0*
