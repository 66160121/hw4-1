# hw4-1

# html
- HTML ใช้กำหนดโครงสร้างของหน้าเว็บ
- <form id="expenseForm">
ฟอร์มสำหรับป้อนข้อมูลค่าใช้จ่าย ประกอบไปด้วย:
<input> ชื่อรายการ (id="title")
<input> จำนวนเงิน (id="amount")
<select> หมวดหมู่ (id="category")
<input> วันที่ (id="date")
<button> ปุ่มเพิ่มข้อมูล

- <div id="expenseList"></div>
ส่วนที่ใช้แสดงรายการค่าใช้จ่ายที่ถูกบันทึก

- <script src="script.js"></script>
นำเข้าไฟล์ JavaScript เพื่อเพิ่มฟังก์ชันการทำงานให้กับหน้าเว็บ


# css
- CSS ใช้กำหนดรูปร่างหน้าตาให้ดูสวยงาม
- body
ใช้ background-color สีเทาอ่อน + padding เพื่อให้ดูได้ง่าย

- .container
ใช้ background-color สีขาว + border-radius เพื่อให้ดูเหมือนการ์ด

- input, select, button
ตั้งค่าความกว้าง width: 100% และเว้นระยะห่าง

- ปุ่ม butto
พื้นหลังสีแดง (background: red)
เปลี่ยนเป็นสีเข้ม (darkred) เมื่อเอาเมาส์ไปวาง (hover)

- ปุ่มแก้ไข (.edit-btn) และ ลบ (.delete-btn)
ใช้ cursor: pointer เพื่อให้ดูเหมือนลิงก์

# javascript
- JavaScript ใช้จัดการข้อมูลค่าใช้จ่าย (เพิ่ม, แก้ไข, ลบ, แสดงผล)
- document.getElementById('expenseForm').addEventListener('submit', function(event)) {...}
ดักจับการกดปุ่ม "เพิ่ม" และบันทึกข้อมูลค่าใช้จ่าย

- function saveExpense(expense) {...}
ดึงข้อมูลที่บันทึกจาก localStorage
เพิ่มรายการใหม่ลงไป
เซฟกลับไปที่ localStorage

- function displayExpenses() {...}
ดึงข้อมูลจาก localStorage
จัดกลุ่มค่าใช้จ่ายตามวันที่
แสดงผลรายการค่าใช้จ่าย

- function editExpense(id) {...}
ดึงข้อมูลของรายการที่ต้องการแก้ไข
เติมข้อมูลลงในฟอร์ม
ลบรายการเก่าออกจาก localStorage

- function deleteExpense(id) {...}
ลบรายการออกจาก localStorage
อัปเดตรายการที่แสดงผล

- document.addEventListener('DOMContentLoaded', displayExpenses);
โหลดข้อมูลค่าใช้จ่ายที่บันทึกไว้ทุกครั้งที่เปิดหน้าเว็บ
