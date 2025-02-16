import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutUs() {
  return (
    <>
    <Navbar/>
    <div class="accordion container mt-5" id="accordionExample" style={{minHeight: '26.5rem'}}>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h4>Scientific and Technical Article : </h4>   Online Store Project with React and Redux 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <h4>Introduction</h4>
       <p>
       This article examines an online store project developed using the React library and state management with Redux. The project includes various pages such as a products page, a shopping cart, and an about page. The goal of this project is to demonstrate the developer's skills in using modern web technologies such as React, Redux, and Bootstrap.
       </p>
       <h4>Project Architecture</h4>
       <p>
       The project consists of several main components:
<br />
<br />
1. *Products Page*: Displays a list of products with the ability to add them to the shopping cart.
<br />
2. *Shopping Cart*: Manages products added to the cart with options to increase, decrease, or remove items.
<br />
3. *About Page*: Provides a detailed explanation of the project and the technologies used.
<br />
       </p>
       <h4> Technologies Used</h4>
       <p>
       - *React*: A library for building dynamic and interactive user interfaces.
       <br />
       - *Redux*: A library for managing the global state of the application.
       <br />
       - *Bootstrap*: A CSS framework for responsive and fast design.
       <br />
       - *Axios*: A library for making HTTP requests.
       <br />
       </p>
       <h4>Code Review</h4>
       <p>
       1. *Initial Setup and Routing*:
       <br />
       <br />
   - Use of ReactDOM.createRoot to render the application.
   <br />
   - Use of Provider from react-redux to connect Redux to the application.
   <br />
   - Definition of routes using react-router-dom.
   <br />
   <br />
2. *State Management with Redux*:
<br />
<br />
   - Creation of slices using createSlice to manage products and the shopping cart.
   <br />
   - Use of createAsyncThunk for making asynchronous requests to an API.
   <br />
   <br />
3. *Components*:
<br />
<br />
   - Products: Displays products and allows adding them to the cart.
   <br />
   - Cart: Manages the shopping cart with options to change quantities and remove products.
   <br />
   - Navbar and Footer: Navigation bar and footer of the website.
   <br />
       </p>
       <h4>Skill Analysis</h4>
       <p>
       - *Proficiency in React*: Use of hooks such as useEffect and useSelector demonstrates a strong command of React.
       <br />
       - *State Management with Redux*: Implementation of slices and use of asynchronous functions indicate a deep understanding of Redux.
       <br />
      - *Responsive Design*: Use of Bootstrap for styling without additional CSS showcases skills in responsive design.
      <br />
       </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      React و Reduxمقاله علمی و تخصصی: پروژه فروشگاه آنلاین با 
      </button>
    </h2>
    <div style={{direction:'rtl'}} id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <article>
          <h4>مقدمه</h4>
          <p>در این مقاله، به بررسی پروژه فروشگاه آنلاین نوشته‌شده با استفاده از کتابخانه React و مدیریت حالت با Redux می‌پردازیم. این پروژه شامل صفحات مختلفی مانند صفحه محصولات، سبد خرید و صفحه درباره‌ی پروژه است. هدف از این پروژه، نمایش مهارت‌های توسعه‌دهنده در استفاده از تکنولوژی‌های مدرن وب مانند React، Redux و Bootstrap است.</p>
          <br />
          <h4>معماری پروژه</h4>
          <p>پروژه از چندین بخش اصلی تشکیل شده است:
          <br /><br />
            1. *صفحه محصولات*: نمایش لیست محصولات با امکان افزودن به سبد خرید.
            <br />
            2. *سبد خرید*: مدیریت محصولات اضافه‌شده به سبد خرید با امکان افزایش، کاهش و حذف محصولات.
            <br />
            3. *صفحه درباره‌ی پروژه*: ارائه توضیحات کامل درباره‌ی پروژه و تکنولوژی‌های استفاده‌شده.
            <br />
            </p>
            <br />
            <h4> تکنولوژی‌های استفاده‌شده </h4>
            <p>
             - *React*: کتابخانه‌ای برای ساخت رابط‌های کاربری پویا و تعاملی.
             <br />
             - *Redux*: کتابخانه‌ای برای مدیریت حالت برنامه در سطح جهانی.
             <br />
             - *Bootstrap*: فریم‌ورک CSS برای طراحی واکنش‌گرا و سریع.<br />
             - *Axios*: کتابخانه‌ای برای انجام درخواست‌های HTTP.
             <br />
             </p>
             <br />
             <h4>بررسی کد</h4>
             <p>
             1. *تنظیمات اولیه و روتینگ*:
             <br /><br />
   - استفاده از ReactDOM.createRoot برای رندر برنامه.
   <br />
   - استفاده از Provider از react-redux برای اتصال Redux به برنامه.
   <br />
   - تعریف روت‌ها با استفاده از react-router-dom.
   <br />
   <br />
2. *مدیریت حالت با Redux*:
<br /><br />
   - ایجاد اسلایس‌ها با createSlice برای مدیریت محصولات و سبد خرید.
   <br />
   - استفاده از createAsyncThunk برای انجام درخواست‌های ناهمزمان به API.
   <br />
   <br />
3. *کامپوننت‌ها*:
<br /><br />
   - Products: نمایش محصولات و امکان افزودن به سبد خرید.
   <br />
   - Cart: مدیریت سبد خرید با امکان تغییر تعداد و حذف محصولات.
   <br />
   - Navbar و Footer: نوار ناوبری و پاورقی سایت.
   <br />
             </p>
             <br />
             <h4>تحلیل مهارت‌ها </h4><br />
             <p>
             - *تسلط بر React*:
             <br />
              استفاده از هوک‌ها مانند useEffect و useSelector نشان‌دهنده‌ی تسلط خوب بر React است.
             <br /><br />
              - *مدیریت حالت با Redux*:<br /> پیاده‌سازی اسلایس‌ها و استفاده از توابع ناهمزمان نشان‌دهنده‌ی درک عمیق از Redux است.
              <br /><br />
               - *طراحی واکنش‌گرا*<br />: استفاده از Bootstrap برای استایل‌دهی بدون نیاز به CSS اضافی نشان‌دهنده‌ی مهارت در طراحی واکنش‌گرا است.

             </p>
        </article>
      </div>
    </div>
  </div>
  
</div>
    <Footer/>
    </>
  )
}
