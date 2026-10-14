/**
 * data.js - ข้อมูลสูตรอาหาร วัตถุดิบ และหมวดหมู่สำหรับ Croc Cook (เวอร์ชัน HTML / Static Web)
 * รองรับการทำงานแบบ Standalone บน Vercel, GitHub Pages หรือเบราว์เซอร์ใดๆ โดยไม่ต้องมี PHP/MySQL
 */

const DEFAULT_CATEGORIES = [
    { id: 1, name: 'เมนูผัด', description: 'อาหารจานด่วน กลิ่นหอมกระทะ ทำง่าย รวดเร็ว หอมอร่อยกลมกล่อม', icon: 'bi-fire' },
    { id: 2, name: 'เมนูต้มและแกง', description: 'ซดคล่องคอ รสชาติจัดจ้าน ทั้งต้มยำ แกงจืด และแกงรสเด็ด', icon: 'bi-cup-hot' },
    { id: 3, name: 'เมนูทอด', description: 'กรอบนอกนุ่มใน สีเหลืองทอง ทานคู่กับข้าวสวยร้อนๆ อร่อยฟิน', icon: 'bi-lightning-charge' },
    { id: 4, name: 'เมนูยำและสลัด', description: 'รสเด็ด เปรี้ยว เค็ม เผ็ด แซ่บจี๊ดถึงใจ แคลอรี่ต่ำเพื่อสุขภาพ', icon: 'bi-flower1' },
    { id: 5, name: 'เมนูน้ำพริก', description: 'เอกลักษณ์คู่สำรับไทย รสจัดจ้าน ครบรส ทานเคียงคู่ผักสดผักต้ม', icon: 'bi-basket2' },
    { id: 6, name: 'อาหารจานเดียว', description: 'เมนูด่วนทันใจ อิ่มอร่อยได้ง่าย สะดวกรวดเร็วในมื้อเร่งรีบ', icon: 'bi-egg-fried' }
];

const DEFAULT_INGREDIENTS = [
    // กลุ่มเนื้อสัตว์
    { id: 1, name: 'หมูสับ', type: 'main', category_group: 'เนื้อสัตว์' },
    { id: 2, name: 'สันคอหมู', type: 'main', category_group: 'เนื้อสัตว์' },
    { id: 3, name: 'กุ้งสด', type: 'main', category_group: 'เนื้อสัตว์' },
    { id: 4, name: 'ปลากระป๋อง', type: 'main', category_group: 'เนื้อสัตว์' },
    { id: 5, name: 'อกไก่', type: 'main', category_group: 'เนื้อสัตว์' },

    // กลุ่มไข่และแป้ง
    { id: 6, name: 'ไข่ไก่', type: 'main', category_group: 'ไข่และแป้ง' },
    { id: 7, name: 'ข้าวสวย', type: 'main', category_group: 'ไข่และแป้ง' },
    { id: 8, name: 'เต้าหู้ไข่', type: 'main', category_group: 'ไข่และแป้ง' },
    { id: 9, name: 'เส้นบะหมี่กึ่งสำเร็จรูป', type: 'main', category_group: 'ไข่และแป้ง' },

    // กลุ่มผักและสมุนไพร
    { id: 10, name: 'พริกขี้หนู', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 11, name: 'กระเทียม', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 12, name: 'ใบกะเพรา', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 13, name: 'หอมแดง', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 14, name: 'หอมหัวใหญ่', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 15, name: 'มะเขือเทศ', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 16, name: 'ต้นหอม', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 17, name: 'ผักชี', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 18, name: 'ข่า', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 19, name: 'ตะไคร้', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 20, name: 'ใบมะกรูด', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 21, name: 'มะนาว', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 22, name: 'แตงกวา', type: 'main', category_group: 'ผักและสมุนไพร' },
    { id: 23, name: 'มะเขือเปราะ', type: 'main', category_group: 'ผักและสมุนไพร' },

    // กลุ่มเครื่องปรุงรส
    { id: 24, name: 'กะปิ', type: 'seasoning', category_group: 'เครื่องปรุงรส' },
    { id: 25, name: 'น้ำปลา', type: 'seasoning', category_group: 'เครื่องปรุงรส' },
    { id: 26, name: 'น้ำตาลทราย', type: 'seasoning', category_group: 'เครื่องปรุงรส' },
    { id: 27, name: 'ผงชูรส', type: 'seasoning', category_group: 'เครื่องปรุงรส' },
    { id: 28, name: 'ซอสหอยนางรม', type: 'seasoning', category_group: 'เครื่องปรุงรส' },
    { id: 29, name: 'ซีอิ๊วขาว', type: 'seasoning', category_group: 'เครื่องปรุงรส' },
    { id: 30, name: 'ซีอิ๊วดำ', type: 'seasoning', category_group: 'เครื่องปรุงรส' },
    { id: 31, name: 'น้ำมันพืช', type: 'seasoning', category_group: 'เครื่องปรุงรส' },
    { id: 32, name: 'พริกไทยป่น', type: 'seasoning', category_group: 'เครื่องปรุงรส' },
    { id: 33, name: 'น้ำพริกเผา', type: 'seasoning', category_group: 'เครื่องปรุงรส' }
];

const DEFAULT_RECIPES = [
    {
        id: 1,
        category_id: 1,
        title: 'ผัดกะเพราหมูสับ',
        description: 'เมนูยอดฮิตตลอดกาล กลิ่นหอมใบกะเพราแท้ รสชาติเผ็ดร้อนกลมกล่อม ทำง่ายใน 15 นาที',
        image: 'kaprao_moo.jpg',
        cooking_time: 15,
        servings: 1,
        instructions: `1. โขลกพริกขี้หนูกับกระเทียมพอหยาบ
2. ตั้งกระทะใส่น้ำมันพืช ใช้ไฟปานกลาง ใส่พริกกระเทียมลงไปผัดจนส่งกลิ่นหอม
3. ใส่หมูสับลงไปผัด ยีให้กระจายจนหมูเริ่มสุก
4. ปรุงรสด้วยซอสหอยนางรม น้ำปลา ซีอิ๊วขาว ซีอิ๊วดำ และน้ำตาลทราย ผัดคลุกเคล้าให้เข้ากัน
5. เร่งไฟแรง ใส่ใบกะเพราลงไป ผัดเร็วๆ ให้ใบกะเพราสลดแล้วปิดเตาทันที ตักเสิร์ฟพร้อมข้าวสวยร้อนๆ`,
        views: 42,
        ingredients: [
            { ingredient_id: 1, name: 'หมูสับ', quantity: '200', unit: 'กรัม', is_essential: 1, type: 'main', category_group: 'เนื้อสัตว์' },
            { ingredient_id: 10, name: 'พริกขี้หนู', quantity: '10', unit: 'เม็ด', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 11, name: 'กระเทียม', quantity: '5', unit: 'กลีบ', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 12, name: 'ใบกะเพรา', quantity: '1', unit: 'ถ้วย', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 31, name: 'น้ำมันพืช', quantity: '1-2', unit: 'ช้อนโต๊ะ', is_essential: 1, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 28, name: 'ซอสหอยนางรม', quantity: '1', unit: 'ช้อนโต๊ะ', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 25, name: 'น้ำปลา', quantity: '1', unit: 'ช้อนโต๊ะ', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 29, name: 'ซีอิ๊วขาว', quantity: '1/2', unit: 'ช้อนโต๊ะ', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 30, name: 'ซีอิ๊วดำ', quantity: '1/2', unit: 'ช้อนชา', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 26, name: 'น้ำตาลทราย', quantity: '1/2', unit: 'ช้อนชา', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' }
        ]
    },
    {
        id: 2,
        category_id: 5,
        title: 'น้ำพริกกะปิ รสเด็ด',
        description: 'น้ำพริกคู่ครัวไทย หอมกะปิแท้ ครบรส เปรี้ยว เค็ม หวาน เผ็ดลงตัว ทานคู่ผักสด ผักต้ม และปลาทูทอด',
        image: 'namprik_kapi.jpg',
        cooking_time: 15,
        servings: 2,
        instructions: `1. นำกะปิไปห่อใบตองหรือฟอยล์แล้วย่างไฟอ่อนๆ พอให้ส่งกลิ่นหอม
2. ใส่พริกขี้หนูและกระเทียมลงในครก โขลกให้ละเอียดปานกลาง
3. ใส่กะปิที่ย่างแล้วลงไป โขลกให้เข้ากับพริกและกระเทียม
4. ปรุงรสด้วยน้ำตาลทราย บีบน้ำมะนาว และเหยาะน้ำปลาเล็กน้อยตามชอบ
5. ใส่มะเขือเปราะหรือพริกขี้หนูเม็ดบุบพอแตก คลุกเคล้าให้เข้ากัน ตักใส่ถ้วยพร้อมเสิร์ฟ`,
        views: 28,
        ingredients: [
            { ingredient_id: 24, name: 'กะปิ', quantity: '2', unit: 'ช้อนโต๊ะ', is_essential: 1, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 10, name: 'พริกขี้หนู', quantity: '10-15', unit: 'เม็ด', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 11, name: 'กระเทียม', quantity: '6', unit: 'กลีบ', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 21, name: 'มะนาว', quantity: '2', unit: 'ลูก', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 26, name: 'น้ำตาลทราย', quantity: '1', unit: 'ช้อนโต๊ะ', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 25, name: 'น้ำปลา', quantity: '1', unit: 'ช้อนชา', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 27, name: 'ผงชูรส', quantity: '1/2', unit: 'ช้อนชา', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 23, name: 'มะเขือเปราะ', quantity: '2-3', unit: 'ลูก', is_essential: 0, type: 'main', category_group: 'ผักและสมุนไพร' }
        ]
    },
    {
        id: 3,
        category_id: 3,
        title: 'ไข่เจียวฟูกรอบหมูสับ',
        description: 'ไข่เจียวสีเหลืองทอง ฟูกรอบนอก นุ่มใน หอมอร่อยกลมกล่อม เมนูง่ายๆ ที่ใครก็หลงรัก',
        image: 'kai_jeaw.jpg',
        cooking_time: 10,
        servings: 1,
        instructions: `1. ตอกไข่ไก่ใส่ชามผสม ใส่หมูสับลงไป
2. ปรุงรสด้วยน้ำปลา ซีอิ๊วขาว และพริกไทยป่นเล็กน้อย
3. ใช้ส้อมหรือตะกร้อมือตีไข่และหมูสับให้เข้ากันจนขึ้นฟองละเอียด
4. ตั้งกระทะเทน้ำมันพืชให้ท่วม ใช้ไฟกลางค่อนไปทางแรง รอจนน้ำมันร้อนจัด (ทดสอบโดยหยดไข่ลงไปแล้วฟูทันที)
5. เทไข่ลงไปตรงกลางกระทะ ทอดจนด้านล่างเหลืองกรอบแล้วพลิกกลับด้าน เมื่อสุกกรอบทั้งสองด้านแล้วตักขึ้นสะเด็ดน้ำมัน พร้อมเสิร์ฟ`,
        views: 35,
        ingredients: [
            { ingredient_id: 6, name: 'ไข่ไก่', quantity: '2', unit: 'ฟอง', is_essential: 1, type: 'main', category_group: 'ไข่และแป้ง' },
            { ingredient_id: 1, name: 'หมูสับ', quantity: '50', unit: 'กรัม', is_essential: 0, type: 'main', category_group: 'เนื้อสัตว์' },
            { ingredient_id: 31, name: 'น้ำมันพืช', quantity: '1', unit: 'ถ้วย', is_essential: 1, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 25, name: 'น้ำปลา', quantity: '1', unit: 'ช้อนชา', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 29, name: 'ซีอิ๊วขาว', quantity: '1/2', unit: 'ช้อนชา', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 32, name: 'พริกไทยป่น', quantity: 'เล็กน้อย', unit: '', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' }
        ]
    },
    {
        id: 4,
        category_id: 6,
        title: 'ข้าวผัดไข่โบราณ',
        description: 'ข้าวผัดหอมกลิ่นคั่วกระทะ เม็ดข้าวร่วนสวย สีเหลืองทอง อิ่มอร่อยสบายท้องสไตล์ครอบครัว',
        image: 'khao_pad.jpg',
        cooking_time: 15,
        servings: 1,
        instructions: `1. ซอยกระเทียม ต้นหอม และหอมหัวใหญ่เตรียมไว้
2. ตั้งกระทะใส่น้ำมันพืช ใส่กระเทียมลงไปผัดพอหอม
3. ตอกไข่ไก่ลงไป ยีไข่ในกระทะจนเกือบสุก
4. ใส่ข้าวสวยลงไป ใช้ไฟแรงผัดคลุกเคล้าเร็วๆ ให้เม็ดข้าวเคลือบไข่ทั่วกัน
5. ปรุงรสด้วยซีอิ๊วขาว ซอสหอยนางรม น้ำตาลทราย และพริกไทยป่น ผัดจนแห้งหอมกระทะ
6. ใส่หอมหัวใหญ่และต้นหอมซอย ผัดต่ออีก 10 วินาที ปิดเตา ตักใส่จานเสิร์ฟพร้อมแตงกวาและมะนาว`,
        views: 19,
        ingredients: [
            { ingredient_id: 7, name: 'ข้าวสวย', quantity: '1', unit: 'จาน', is_essential: 1, type: 'main', category_group: 'ไข่และแป้ง' },
            { ingredient_id: 6, name: 'ไข่ไก่', quantity: '1-2', unit: 'ฟอง', is_essential: 1, type: 'main', category_group: 'ไข่และแป้ง' },
            { ingredient_id: 11, name: 'กระเทียม', quantity: '3', unit: 'กลีบ', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 31, name: 'น้ำมันพืช', quantity: '1', unit: 'ช้อนโต๊ะ', is_essential: 1, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 14, name: 'หอมหัวใหญ่', quantity: '1/4', unit: 'หัว', is_essential: 0, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 16, name: 'ต้นหอม', quantity: '1', unit: 'ต้น', is_essential: 0, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 29, name: 'ซีอิ๊วขาว', quantity: '1', unit: 'ช้อนโต๊ะ', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 28, name: 'ซอสหอยนางรม', quantity: '1/2', unit: 'ช้อนโต๊ะ', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 26, name: 'น้ำตาลทราย', quantity: '1/2', unit: 'ช้อนชา', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 32, name: 'พริกไทยป่น', quantity: 'เล็กน้อย', unit: '', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' }
        ]
    },
    {
        id: 5,
        category_id: 2,
        title: 'ต้มยำกุ้งน้ำใส',
        description: 'เมนูประจำชาติไทย รสชาติจัดจ้าน เปรี้ยว เผ็ด เค็ม หอมสมุนไพร ข่า ตะไคร้ ใบมะกรูด ซดน้ำร้อนๆ คล่องคอ',
        image: 'tomyum_kung.jpg',
        cooking_time: 20,
        servings: 2,
        instructions: `1. ล้างกุ้งสด แกะเปลือก ผ่าหลังดึงเส้นดำออก
2. ต้มน้ำในหม้อจนเดือด ใส่ข่าหั่นแว่น ตะไคร้ทุบ และใบมะกรูดฉีก ต้มจนมีกลิ่นหอมสมุนไพร
3. ใส่มะเขือเทศและหอมแดงทุบลงไป
4. พอน้ำเดือดอีกครั้ง ใส่กุ้งสดลงไป ห้ามคนเพื่อไม่ให้คาว รอจนกุ้งสุกเปลี่ยนเป็นสีส้มสวย
5. ปรุงรสด้วยน้ำปลา และพริกขี้หนูทุบ ปิดเตา
6. บีบน้ำมะนาวสดลงไป คนเบาๆ โรยหน้าด้วยผักชีและต้นหอม ตักเสิร์ฟร้อนๆ`,
        views: 25,
        ingredients: [
            { ingredient_id: 3, name: 'กุ้งสด', quantity: '5-7', unit: 'ตัว', is_essential: 1, type: 'main', category_group: 'เนื้อสัตว์' },
            { ingredient_id: 18, name: 'ข่า', quantity: '4-5', unit: 'แว่น', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 19, name: 'ตะไคร้', quantity: '2', unit: 'ต้น', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 20, name: 'ใบมะกรูด', quantity: '3-4', unit: 'ใบ', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 10, name: 'พริกขี้หนู', quantity: '8-10', unit: 'เม็ด', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 21, name: 'มะนาว', quantity: '2', unit: 'ลูก', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 25, name: 'น้ำปลา', quantity: '2', unit: 'ช้อนโต๊ะ', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 15, name: 'มะเขือเทศ', quantity: '1', unit: 'ลูก', is_essential: 0, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 13, name: 'หอมแดง', quantity: '3', unit: 'หัว', is_essential: 0, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 17, name: 'ผักชี', quantity: '1', unit: 'ต้น', is_essential: 0, type: 'main', category_group: 'ผักและสมุนไพร' }
        ]
    },
    {
        id: 6,
        category_id: 4,
        title: 'ยำปลากระป๋องรสแซ่บ',
        description: 'เมนูช่วยชีวิตประจำบ้าน อร่อยเลิศ ปรุงง่าย เปรี้ยวเผ็ดจี๊ดจ๊าด ทานกับข้าวสวยร้อนๆ หรือเป็นกับแกล้มก็ลงตัว',
        image: 'yum_plakadpong.jpg',
        cooking_time: 10,
        servings: 1,
        instructions: `1. ซอยพริกขี้หนู หอมแดง ตะไคร้ และต้นหอมเตรียมไว้
2. เปิดปลากระป๋องเทใส่ชามผสมอย่างเบามือ ระวังอย่าให้เนื้อปลาเละ
3. ปรุงรสด้วยน้ำปลา น้ำตาลทรายเล็กน้อย และบีบน้ำมะนาวสด
4. ใส่พริกขี้หนู หอมแดง ตะไคร้ซอย และต้นหอมลงไป คลุกเคล้าเบาๆ ให้เข้ากัน
5. ตักใส่จาน โรยด้วยผักชี พร้อมรับประทาน`,
        views: 14,
        ingredients: [
            { ingredient_id: 4, name: 'ปลากระป๋อง', quantity: '1', unit: 'กระป๋อง', is_essential: 1, type: 'main', category_group: 'เนื้อสัตว์' },
            { ingredient_id: 10, name: 'พริกขี้หนู', quantity: '5-7', unit: 'เม็ด', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 13, name: 'หอมแดง', quantity: '3-4', unit: 'หัว', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 21, name: 'มะนาว', quantity: '1', unit: 'ลูก', is_essential: 1, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 19, name: 'ตะไคร้', quantity: '1', unit: 'ต้น', is_essential: 0, type: 'main', category_group: 'ผักและสมุนไพร' },
            { ingredient_id: 25, name: 'น้ำปลา', quantity: '1', unit: 'ช้อนโต๊ะ', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 26, name: 'น้ำตาลทราย', quantity: '1/2', unit: 'ช้อนชา', is_essential: 0, type: 'seasoning', category_group: 'เครื่องปรุงรส' },
            { ingredient_id: 16, name: 'ต้นหอม', quantity: '1', unit: 'ต้น', is_essential: 0, type: 'main', category_group: 'ผักและสมุนไพร' }
        ]
    }
];

// Helper Functions สำหรับจัดการข้อมูลใน LocalStorage
class KitchenData {
    static getCategories() {
        return DEFAULT_CATEGORIES;
    }

    static getCategoryById(id) {
        return DEFAULT_CATEGORIES.find(c => c.id === parseInt(id));
    }

    static getIngredients() {
        const stored = localStorage.getItem('kitchen_ingredients');
        if (stored) {
            try { return JSON.parse(stored); } catch (e) {}
        }
        return DEFAULT_INGREDIENTS;
    }

    static getRecipes() {
        const stored = localStorage.getItem('kitchen_recipes');
        let recipes = DEFAULT_RECIPES;
        if (stored) {
            try { recipes = JSON.parse(stored); } catch (e) {}
        }

        // เชื่อมโยงข้อมูล Category เข้ากับแต่ละ Recipe
        return recipes.map(r => {
            const cat = KitchenData.getCategoryById(r.category_id) || { name: 'ทั่วไป', icon: 'bi-tag' };
            return {
                ...r,
                category_name: cat.name,
                category_icon: cat.icon,
                total_ingredients: (r.ingredients || []).length
            };
        });
    }

    static getRecipeById(id) {
        const recipes = KitchenData.getRecipes();
        return recipes.find(r => r.id === parseInt(id)) || null;
    }

    static incrementViews(recipeId) {
        const id = parseInt(recipeId);
        // ตรวจสอบว่าในเซสชันนี้เคยเปิดเมนูนี้หรือยัง (ป้องกันรีเฟรชแล้วนับซ้ำ)
        const viewedKey = 'kitchen_viewed_session';
        let viewed = [];
        try {
            viewed = JSON.parse(sessionStorage.getItem(viewedKey) || '[]');
        } catch (e) {}

        if (!viewed.includes(id)) {
            viewed.push(id);
            sessionStorage.setItem(viewedKey, JSON.stringify(viewed));

            let recipes = KitchenData.getRecipes();
            const rIndex = recipes.findIndex(r => r.id === id);
            if (rIndex !== -1) {
                recipes[rIndex].views = (recipes[rIndex].views || 0) + 1;
                localStorage.setItem('kitchen_recipes', JSON.stringify(recipes));
                return recipes[rIndex].views;
            }
        }
        const recipe = KitchenData.getRecipeById(id);
        return recipe ? (recipe.views || 0) : 0;
    }

    // ฟังก์ชันคำนวณการจับคู่วัตถุดิบ (Matching Algorithm)
    static matchRecipes(selectedIds) {
        const ids = selectedIds.map(id => parseInt(id));
        const recipes = KitchenData.getRecipes();

        const readyToCook = [];
        const needMoreIngredients = [];

        recipes.forEach(recipe => {
            const recipeIngredients = recipe.ingredients || [];
            const have = [];
            const missing = [];
            let missingEssential = 0;

            const group_have = [];
            const group_missing_essential = [];
            const group_seasonings = [];
            const group_optional = [];

            recipeIngredients.forEach(item => {
                const isHave = ids.includes(parseInt(item.ingredient_id));
                const isEssential = parseInt(item.is_essential) === 1;
                const isSeasoning = item.type === 'seasoning' || item.category_group === 'เครื่องปรุงรส';

                if (isHave) {
                    have.push(item);
                    group_have.push(item);
                } else {
                    missing.push(item);
                    if (isEssential) {
                        missingEssential++;
                    }

                    if (isSeasoning) {
                        group_seasonings.push(item);
                    } else if (isEssential) {
                        group_missing_essential.push(item);
                    } else {
                        group_optional.push(item);
                    }
                }
            });

            const totalCount = have.length + missing.length;
            const matchPercent = totalCount > 0 ? Math.round((have.length / totalCount) * 100) : 0;

            const matchItem = {
                ...recipe,
                have,
                missing,
                missing_essential: missingEssential,
                have_count: have.length,
                missing_count: missing.length,
                total_count: totalCount,
                match_percent: matchPercent,
                group_have,
                group_missing_essential,
                group_seasonings,
                group_optional
            };

            if (have.length > 0) {
                if (missingEssential === 0) {
                    readyToCook.push(matchItem);
                } else {
                    needMoreIngredients.push(matchItem);
                }
            }
        });

        readyToCook.sort((a, b) => b.match_percent - a.match_percent);
        needMoreIngredients.sort((a, b) => b.have_count - a.have_count);

        return { readyToCook, needMoreIngredients };
    }
}

// ผูกไว้กับ window เพื่อให้เรียกใช้งานได้ทุกที่
window.KitchenData = KitchenData;
