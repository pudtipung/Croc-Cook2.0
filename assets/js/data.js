/**
 * data.js - ข้อมูลสูตรอาหาร วัตถุดิบ และหมวดหมู่สำหรับ Croc Cook (เวอร์ชัน HTML / Static Web)
 * ซิงค์ข้อมูลล่าสุดจากฐานข้อมูล MySQL (phpMyAdmin)
 */

const DEFAULT_CATEGORIES = [
    {
        "id": 1,
        "name": "เมนูผัด",
        "description": "อาหารจานด่วน กลิ่นหอมกระทะ ทำง่าย รวดเร็ว หอมอร่อยกลมกล่อม",
        "icon": "bi-fire"
    },
    {
        "id": 2,
        "name": "เมนูต้มและแกง",
        "description": "ซดคล่องคอ รสชาติจัดจ้าน ทั้งต้มยำ แกงจืด และแกงรสเด็ด",
        "icon": "bi-cup-hot"
    },
    {
        "id": 3,
        "name": "เมนูทอด",
        "description": "กรอบนอกนุ่มใน สีเหลืองทอง ทานคู่กับข้าวสวยร้อนๆ อร่อยฟิน",
        "icon": "bi-egg-fried"
    },
    {
        "id": 4,
        "name": "เมนูยำและสลัด",
        "description": "รสเด็ด เปรี้ยว เค็ม เผ็ด แซ่บจี๊ดถึงใจ แคลอรี่ต่ำเพื่อสุขภาพ",
        "icon": "bi-emoji-sunglasses"
    },
    {
        "id": 5,
        "name": "เมนูน้ำพริก",
        "description": "เอกลักษณ์คู่สำรับไทย รสจัดจ้าน ครบรส ทานเคียงคู่ผักสดผักต้ม",
        "icon": "bi-flower1"
    },
    {
        "id": 6,
        "name": "อาหารจานเดียว",
        "description": "เมนูด่วนทันใจ อิ่มอร่อยได้ง่าย สะดวกรวดเร็วในมื้อเร่งรีบ",
        "icon": "bi-egg-fried"
    }
];

const CURRENT_DATA_VERSION = '20261014_v2';

const DEFAULT_INGREDIENTS = [
    {
        "id": 1,
        "name": "หมูสับ",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 3,
        "name": "กุ้งขาว",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 4,
        "name": "ปลากระป๋อง",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 5,
        "name": "อกไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 6,
        "name": "ไข่ไก่",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 7,
        "name": "ข้าวสวย",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 8,
        "name": "เต้าหู้ไข่",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 9,
        "name": "เส้นบะหมี่กึ่งสำเร็จรูป",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 10,
        "name": "พริกขี้หนู",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 11,
        "name": "กระเทียม",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 12,
        "name": "ใบกะเพรา",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 13,
        "name": "หอมแดง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 14,
        "name": "หอมหัวใหญ่",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 15,
        "name": "มะเขือเทศ",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 16,
        "name": "ต้นหอม",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 17,
        "name": "ผักชี",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 18,
        "name": "ข่า",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 19,
        "name": "ตะไคร้",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 20,
        "name": "ใบมะกรูด",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 21,
        "name": "มะนาว",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 22,
        "name": "แตงกวา",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 23,
        "name": "มะเขือเปราะ",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 24,
        "name": "กะปิ",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 25,
        "name": "น้ำปลา",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 26,
        "name": "น้ำตาลทราย",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 27,
        "name": "ผงชูรส",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 28,
        "name": "ซอสหอยนางรม",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 29,
        "name": "ซีอิ๊วขาว",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 30,
        "name": "ซีอิ๊วดำ",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 31,
        "name": "น้ำมันพืช",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 32,
        "name": "พริกไทยขาว",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 33,
        "name": "น้ำพริกเผา",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 36,
        "name": "ปลานิล",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 37,
        "name": "สันคอหมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 38,
        "name": "ซี่โครงหมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 39,
        "name": "ข้อไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 40,
        "name": "ปลายปีกไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 41,
        "name": "ปีกกลางไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 42,
        "name": "น่องเล็กไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 43,
        "name": "สะโพกไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 44,
        "name": "น่องไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 45,
        "name": "ปีกบนไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 46,
        "name": "คอไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 47,
        "name": "โครงไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 48,
        "name": "ตับไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 49,
        "name": "ไส้ไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 50,
        "name": "ปอดไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 51,
        "name": "หัวใจไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 52,
        "name": "กึ๋นไก่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 53,
        "name": "สันนอกหมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 54,
        "name": "สันในหมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 55,
        "name": "สามชั้นหมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 56,
        "name": "คากิ",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 57,
        "name": "สะโพกหมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 58,
        "name": "ขาหมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 59,
        "name": "กระดูกหมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 60,
        "name": "ไส้หมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 61,
        "name": "ตับหมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 62,
        "name": "หัวหมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 63,
        "name": "สันคอวัว",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 64,
        "name": "สันในวัว",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 65,
        "name": "สันนอกวัว",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 66,
        "name": "สะโพกวัว",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 67,
        "name": "น่องลายวัว",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 68,
        "name": "เนื้อติดอกวัว",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 69,
        "name": "พวงนมหมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 70,
        "name": "เนื้อหน้าท้องวัว",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 71,
        "name": "ซี่โครงวัว",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 72,
        "name": "หางวัว",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 73,
        "name": "หางหมู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 74,
        "name": "ปลาช่อน",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 75,
        "name": "ปลาทับทิม",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 76,
        "name": "ปลาดุก",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 77,
        "name": "ปลากราย",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 78,
        "name": "ปลาสวาย",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 79,
        "name": "ปลากระพง",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 80,
        "name": "ปลาทู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 81,
        "name": "ปลาเก๋า",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 82,
        "name": "ปลาจะละเม็ด",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 83,
        "name": "ปลาแซลม่อน",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 84,
        "name": "หมึกกล้วย",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 85,
        "name": "กุ้งแช่บ๊วย",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 86,
        "name": "กุ้งกุลาดำ",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 87,
        "name": "กุ้งลายเสือ",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 88,
        "name": "กุ้งมังกร",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 89,
        "name": "กุ้งล็อบเตอร์",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 90,
        "name": "หมึกหอม",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 91,
        "name": "หมึกกระดอง",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 92,
        "name": "หมึกสาย",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 93,
        "name": "ปูดำ",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 94,
        "name": "ปูทะเล",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 95,
        "name": "ปูม้า",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 96,
        "name": "ปูนา",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 97,
        "name": "หอยแมลงภู่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 98,
        "name": "หอยแครง",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 99,
        "name": "หอยคาง",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 100,
        "name": "หอยเชลล์",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 101,
        "name": "หอยเม่น",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 102,
        "name": "หอยหวาน",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 103,
        "name": "หอยขม",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 104,
        "name": "หอยเชอรี่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 105,
        "name": "กั้งกระดาน",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 106,
        "name": "กั้งแก้ว",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 107,
        "name": "แมงกระพรุน",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 108,
        "name": "ปลาอินทรีย์",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 109,
        "name": "ปลาสาก",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 110,
        "name": "หอยลาย",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 111,
        "name": "หอยตลับ",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 112,
        "name": "หอยนางรม",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 113,
        "name": "ปลิงทะเล",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 114,
        "name": "หูฉลาม",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 115,
        "name": "ปลากระเบน",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 116,
        "name": "ตั๊กแตน",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 117,
        "name": "จิ้งหรีด",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 118,
        "name": "ดักแด้",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 119,
        "name": "แมงสะดิ้ง",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 120,
        "name": "ไข่มดแดง",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 121,
        "name": "รถด่วน",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 122,
        "name": "ตัวอ่อนผึ้ง",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 123,
        "name": "แมงจีซอน",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 124,
        "name": "แมงดานา",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 125,
        "name": "ไข่แมงดาทะเล",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 126,
        "name": "บ้องตัน(จระเข้)",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 127,
        "name": "เนื้อสะโพก(จระเข้)",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 128,
        "name": "อุ้งเท้า(จระเข้)",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 129,
        "name": "ผงปรุงรส",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 130,
        "name": "น้ำปลาร้า",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 131,
        "name": "น้ำตาลปิ๊ป",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 132,
        "name": "น้ำตาลมะพร้าว",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 133,
        "name": "น้ำมะขามเปียก",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 134,
        "name": "น้ำส้มสายชู",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 135,
        "name": "ซีอิ๊วดำหวาน",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 136,
        "name": "เต้าเจี๊ยว",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 137,
        "name": "ซอสเปรี้ยว",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 138,
        "name": "น้ำกระเทียมดอง",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 139,
        "name": "โชยุ",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 140,
        "name": "ซอสมะเขือเทศ",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 141,
        "name": "ซอสพริก",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 142,
        "name": "มายองเนส",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 143,
        "name": "มาสตาส",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 144,
        "name": "ซอสปรุงรส",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 145,
        "name": "เกลือ",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 146,
        "name": "พริกป่น",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 147,
        "name": "ข้าวคั่ว",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 148,
        "name": "พริกไทยดำ",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 149,
        "name": "พริกไทยอ่อน",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 150,
        "name": "ซอสเทอริยากิ",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 151,
        "name": "พริกแกงเผ็ด",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 152,
        "name": "พริกแกงใต้",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 153,
        "name": "พริกแกงป่า",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 154,
        "name": "พริกแกงคั่ว",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 155,
        "name": "พริกแกงเขียวหวาน",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 156,
        "name": "พริกแกงพะแนง",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 157,
        "name": "พริกแกงมัสมั่น",
        "type": "seasoning",
        "category_group": "เครื่องปรุงรส"
    },
    {
        "id": 158,
        "name": "โหระพา",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 159,
        "name": "หน่อไม้",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 160,
        "name": "หน่อไม้ดอง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 161,
        "name": "ฝักทอง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 162,
        "name": "ฝัก",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 163,
        "name": "ผักบุ้ง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 164,
        "name": "กะหล่ำปลี",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 165,
        "name": "ผักกาดขาว",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 166,
        "name": "คะน้า",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 167,
        "name": "ขึ้นฉ่าย",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 168,
        "name": "ถั่วฝักยาว",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 169,
        "name": "กระชาย",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 170,
        "name": "พริกหยวก",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 171,
        "name": "พริกหวาน",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 172,
        "name": "พริกชี้ฟ้า",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 173,
        "name": "ใบบัวบก",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 174,
        "name": "บวบ",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 175,
        "name": "รากบัว",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 176,
        "name": "สายบัว",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 177,
        "name": "รากผักชี",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 178,
        "name": "ผักชีใบเรื่อย",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 179,
        "name": "ยอดกฐิน",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 180,
        "name": "พริกแห้ง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 181,
        "name": "ผักหวาน",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 182,
        "name": "ผักโขม",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 183,
        "name": "ชะอม",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 184,
        "name": "ใบเหลียง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 185,
        "name": "หัวปลีกล้วย",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 186,
        "name": "มะเขือพวง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 187,
        "name": "มะเขือยาว",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 188,
        "name": "มะเขือม่วง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 189,
        "name": "มะละกอ",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 190,
        "name": "หอมแขก",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 191,
        "name": "มะม่วง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 192,
        "name": "กะหล่ำปลีม่วง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 193,
        "name": "หน่อไม้ฝรั่ง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 194,
        "name": "ผักสลัด",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 195,
        "name": "ใบขี้เหล็ก",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 196,
        "name": "ผักติ้ว",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 197,
        "name": "ใบยอ",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 198,
        "name": "ใบมะขามอ่อน",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 199,
        "name": "เห็ดเข็มทอง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 200,
        "name": "เห็ดฟาง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 201,
        "name": "เห็ดปลวก",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 202,
        "name": "เห็ดนางฟ้า",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 203,
        "name": "เห็ดหูหนูดำ",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 204,
        "name": "เห็ดออรินจิ",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 205,
        "name": "เห็ดหอม",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 206,
        "name": "เห็ดเพาะ",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 207,
        "name": "เห็ดโคน",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 208,
        "name": "เห็ดละโงก",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 209,
        "name": "เห็ดแชมปิญอง",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 210,
        "name": "เห็ดชิเมจิ",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 211,
        "name": "เห็ดหูหนูขาว",
        "type": "main",
        "category_group": "ผักและสมุนไพร"
    },
    {
        "id": 212,
        "name": "ไข่เป็ด",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 213,
        "name": "ไข่นกกระทา",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 214,
        "name": "ไข่นกกระจอกเทศ",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 215,
        "name": "ไข่จระเข้",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 216,
        "name": "ไข่ปลาคาเวีย",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 217,
        "name": "ไข่ปลาริวกิว",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 218,
        "name": "ไข่ปลาแซลม่อน",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 219,
        "name": "ไข่กุ้ง",
        "type": "main",
        "category_group": "ไข่และแป้ง"
    },
    {
        "id": 220,
        "name": "ปลาไข่",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 221,
        "name": "หมูกรอบ",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    },
    {
        "id": 222,
        "name": "กุ้งแม่น้ำ",
        "type": "main",
        "category_group": "เนื้อสัตว์"
    }
];

const DEFAULT_RECIPES = [
    {
        "id": 1,
        "category_id": 1,
        "title": "ผัดกะเพราหมูสับ",
        "description": "เมนูยอดฮิตตลอดกาล กลิ่นหอมใบกะเพราแท้ รสชาติเผ็ดร้อนกลมกล่อม ทำง่ายใน 15 นาที",
        "image": "\/assets\/images\/recipe_20261014_123052_d9b617c6.png",
        "cooking_time": 15,
        "servings": 1,
        "instructions": "1. โขลกพริกขี้หนูกับกระเทียมพอหยาบ\r\n2. ตั้งกระทะใส่น้ำมันพืช ใช้ไฟปานกลาง ใส่พริกกระเทียมลงไปผัดจนส่งกลิ่นหอม\r\n3. ใส่หมูสับลงไปผัด ยีให้กระจายจนหมูเริ่มสุก\r\n4. ปรุงรสด้วยซอสหอยนางรม น้ำปลา ซีอิ๊วขาว ซีอิ๊วดำ และน้ำตาลทราย ผัดคลุกเคล้าให้เข้ากัน\r\n5. เร่งไฟแรง ใส่ใบกะเพราลงไป ผัดเร็วๆ ให้ใบกะเพราสลดแล้วปิดเตาทันที ตักเสิร์ฟพร้อมข้าวสวยร้อนๆ",
        "views": 1,
        "ingredients": [
            {
                "ingredient_id": 1,
                "name": "หมูสับ",
                "quantity": "200",
                "unit": "กรัม",
                "is_essential": 1,
                "type": "main",
                "category_group": "เนื้อสัตว์"
            },
            {
                "ingredient_id": 10,
                "name": "พริกขี้หนู",
                "quantity": "10",
                "unit": "เม็ด",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 11,
                "name": "กระเทียม",
                "quantity": "5",
                "unit": "กลีบ",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 12,
                "name": "ใบกะเพรา",
                "quantity": "1",
                "unit": "ถ้วย",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 31,
                "name": "น้ำมันพืช",
                "quantity": "1-2",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 28,
                "name": "ซอสหอยนางรม",
                "quantity": "1",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 25,
                "name": "น้ำปลา",
                "quantity": "1",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 29,
                "name": "ซีอิ๊วขาว",
                "quantity": "1\/2",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 30,
                "name": "ซีอิ๊วดำ",
                "quantity": "1\/2",
                "unit": "ช้อนชา",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 26,
                "name": "น้ำตาลทราย",
                "quantity": "1\/2",
                "unit": "ช้อนชา",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            }
        ]
    },
    {
        "id": 2,
        "category_id": 5,
        "title": "น้ำพริกกะปิ รสเด็ด",
        "description": "น้ำพริกคู่ครัวไทย หอมกะปิแท้ ครบรส เปรี้ยว เค็ม หวาน เผ็ดลงตัว ทานคู่ผักสด ผักต้ม และปลาทูทอด",
        "image": "\/assets\/images\/recipe_20261014_123126_20a30fc3.png",
        "cooking_time": 15,
        "servings": 2,
        "instructions": "1. นำกะปิไปห่อใบตองหรือฟอยล์แล้วย่างไฟอ่อนๆ พอให้ส่งกลิ่นหอม\r\n2. ใส่พริกขี้หนูและกระเทียมลงในครก โขลกให้ละเอียดปานกลาง\r\n3. ใส่กะปิที่ย่างแล้วลงไป โขลกให้เข้ากับพริกและกระเทียม\r\n4. ปรุงรสด้วยน้ำตาลทราย บีบน้ำมะนาว และเหยาะน้ำปลาเล็กน้อยตามชอบ\r\n5. ใส่มะเขือเปราะหรือพริกขี้หนูเม็ดบุบพอแตก คลุกเคล้าให้เข้ากัน ตักใส่ถ้วยพร้อมเสิร์ฟ",
        "views": 2,
        "ingredients": [
            {
                "ingredient_id": 24,
                "name": "กะปิ",
                "quantity": "2",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 10,
                "name": "พริกขี้หนู",
                "quantity": "10-15",
                "unit": "เม็ด",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 11,
                "name": "กระเทียม",
                "quantity": "6",
                "unit": "กลีบ",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 21,
                "name": "มะนาว",
                "quantity": "2",
                "unit": "ลูก",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 26,
                "name": "น้ำตาลทราย",
                "quantity": "1",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 25,
                "name": "น้ำปลา",
                "quantity": "1",
                "unit": "ช้อนชา",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 27,
                "name": "ผงชูรส",
                "quantity": "1\/2",
                "unit": "ช้อนชา",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 23,
                "name": "มะเขือเปราะ",
                "quantity": "2-3",
                "unit": "ลูก",
                "is_essential": 0,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            }
        ]
    },
    {
        "id": 3,
        "category_id": 3,
        "title": "ไข่เจียวฟูกรอบหมูสับ",
        "description": "ไข่เจียวสีเหลืองทอง ฟูกรอบนอก นุ่มใน หอมอร่อยกลมกล่อม เมนูง่ายๆ ที่ใครก็หลงรัก",
        "image": "\/assets\/images\/recipe_20261014_123152_1773f517.png",
        "cooking_time": 10,
        "servings": 1,
        "instructions": "1. ตอกไข่ไก่ใส่ชามผสม ใส่หมูสับลงไป\r\n2. ปรุงรสด้วยน้ำปลา ซีอิ๊วขาว และพริกไทยป่นเล็กน้อย\r\n3. ใช้ส้อมหรือตะกร้อมือตีไข่และหมูสับให้เข้ากันจนขึ้นฟองละเอียด\r\n4. ตั้งกระทะเทน้ำมันพืชให้ท่วม ใช้ไฟกลางค่อนไปทางแรง รอจนน้ำมันร้อนจัด (ทดสอบโดยหยดไข่ลงไปแล้วฟูทันที)\r\n5. เทไข่ลงไปตรงกลางกระทะ ทอดจนด้านล่างเหลืองกรอบแล้วพลิกกลับด้าน เมื่อสุกกรอบทั้งสองด้านแล้วตักขึ้นสะเด็ดน้ำมัน พร้อมเสิร์ฟ",
        "views": 0,
        "ingredients": [
            {
                "ingredient_id": 6,
                "name": "ไข่ไก่",
                "quantity": "2",
                "unit": "ฟอง",
                "is_essential": 1,
                "type": "main",
                "category_group": "ไข่และแป้ง"
            },
            {
                "ingredient_id": 1,
                "name": "หมูสับ",
                "quantity": "50",
                "unit": "กรัม",
                "is_essential": 0,
                "type": "main",
                "category_group": "เนื้อสัตว์"
            },
            {
                "ingredient_id": 31,
                "name": "น้ำมันพืช",
                "quantity": "1",
                "unit": "ถ้วย",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 25,
                "name": "น้ำปลา",
                "quantity": "1",
                "unit": "ช้อนชา",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 29,
                "name": "ซีอิ๊วขาว",
                "quantity": "1\/2",
                "unit": "ช้อนชา",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 32,
                "name": "พริกไทยขาว",
                "quantity": "เล็กน้อย",
                "unit": "",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            }
        ]
    },
    {
        "id": 4,
        "category_id": 1,
        "title": "ข้าวผัดไข่โบราณ",
        "description": "ข้าวผัดหอมกลิ่นคั่วกระทะ เม็ดข้าวร่วนสวย สีเหลืองทอง อิ่มอร่อยสบายท้องสไตล์ครอบครัว",
        "image": "\/assets\/images\/recipe_20261014_123306_6a5c9b0a.png",
        "cooking_time": 15,
        "servings": 1,
        "instructions": "1. ซอยกระเทียม ต้นหอม และหอมหัวใหญ่เตรียมไว้\r\n2. ตั้งกระทะใส่น้ำมันพืช ใส่กระเทียมลงไปผัดพอหอม\r\n3. ตอกไข่ไก่ลงไป ยีไข่ในกระทะจนเกือบสุก\r\n4. ใส่ข้าวสวยลงไป ใช้ไฟแรงผัดคลุกเคล้าเร็วๆ ให้เม็ดข้าวเคลือบไข่ทั่วกัน\r\n5. ปรุงรสด้วยซีอิ๊วขาว ซอสหอยนางรม น้ำตาลทราย และพริกไทยป่น ผัดจนแห้งหอมกระทะ\r\n6. ใส่หอมหัวใหญ่และต้นหอมซอย ผัดต่ออีก 10 วินาที ปิดเตา ตักใส่จานเสิร์ฟพร้อมแตงกวาและมะนาว",
        "views": 1,
        "ingredients": [
            {
                "ingredient_id": 7,
                "name": "ข้าวสวย",
                "quantity": "1",
                "unit": "จาน",
                "is_essential": 1,
                "type": "main",
                "category_group": "ไข่และแป้ง"
            },
            {
                "ingredient_id": 6,
                "name": "ไข่ไก่",
                "quantity": "1-2",
                "unit": "ฟอง",
                "is_essential": 1,
                "type": "main",
                "category_group": "ไข่และแป้ง"
            },
            {
                "ingredient_id": 11,
                "name": "กระเทียม",
                "quantity": "3",
                "unit": "กลีบ",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 31,
                "name": "น้ำมันพืช",
                "quantity": "1",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 14,
                "name": "หอมหัวใหญ่",
                "quantity": "1\/4",
                "unit": "หัว",
                "is_essential": 0,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 16,
                "name": "ต้นหอม",
                "quantity": "1",
                "unit": "ต้น",
                "is_essential": 0,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 29,
                "name": "ซีอิ๊วขาว",
                "quantity": "1",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 28,
                "name": "ซอสหอยนางรม",
                "quantity": "1\/2",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 26,
                "name": "น้ำตาลทราย",
                "quantity": "1\/2",
                "unit": "ช้อนชา",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 32,
                "name": "พริกไทยขาว",
                "quantity": "เล็กน้อย",
                "unit": "",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            }
        ]
    },
    {
        "id": 5,
        "category_id": 2,
        "title": "ต้มยำกุ้งน้ำใส(กุ้งแม่น้ำ)",
        "description": "เมนูประจำชาติไทย รสชาติจัดจ้าน เปรี้ยว เผ็ด เค็ม หอมสมุนไพร ข่า ตะไคร้ ใบมะกรูด ซดน้ำร้อนๆ คล่องคอ",
        "image": "\/assets\/images\/recipe_20261014_123406_7c9a072a.png",
        "cooking_time": 20,
        "servings": 2,
        "instructions": "1. ล้างกุ้งแม่น้ำ แกะเปลือก ผ่าหลังดึงเส้นดำออก\r\n2. ต้มน้ำในหม้อจนเดือด ใส่ข่าหั่นแว่น ตะไคร้ทุบ และใบมะกรูดฉีก ต้มจนมีกลิ่นหอมสมุนไพร\r\n3. ใส่มะเขือเทศและหอมแดงทุบลงไป\r\n4. พอน้ำเดือดอีกครั้ง ใส่กุ้งสดลงไป ห้ามคนเพื่อไม่ให้คาว รอจนกุ้งสุกเปลี่ยนเป็นสีส้มสวย\r\n5. ปรุงรสด้วยน้ำปลา และพริกขี้หนูทุบ ปิดเตา\r\n6. บีบน้ำมะนาวสดลงไป คนเบาๆ โรยหน้าด้วยผักชีและต้นหอม ตักเสิร์ฟร้อนๆ",
        "views": 0,
        "ingredients": [
            {
                "ingredient_id": 222,
                "name": "กุ้งแม่น้ำ",
                "quantity": "5-7",
                "unit": "ตัว",
                "is_essential": 1,
                "type": "main",
                "category_group": "เนื้อสัตว์"
            },
            {
                "ingredient_id": 18,
                "name": "ข่า",
                "quantity": "4-5",
                "unit": "แว่น",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 19,
                "name": "ตะไคร้",
                "quantity": "2",
                "unit": "ต้น",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 20,
                "name": "ใบมะกรูด",
                "quantity": "3-4",
                "unit": "ใบ",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 10,
                "name": "พริกขี้หนู",
                "quantity": "8-10",
                "unit": "เม็ด",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 21,
                "name": "มะนาว",
                "quantity": "2",
                "unit": "ลูก",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 25,
                "name": "น้ำปลา",
                "quantity": "2",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 15,
                "name": "มะเขือเทศ",
                "quantity": "1",
                "unit": "ลูก",
                "is_essential": 0,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 13,
                "name": "หอมแดง",
                "quantity": "3",
                "unit": "หัว",
                "is_essential": 0,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 17,
                "name": "ผักชี",
                "quantity": "1",
                "unit": "ต้น",
                "is_essential": 0,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            }
        ]
    },
    {
        "id": 6,
        "category_id": 4,
        "title": "ยำปลากระป๋องรสแซ่บ",
        "description": "เมนูช่วยชีวิตประจำบ้าน อร่อยเลิศ ปรุงง่าย เปรี้ยวเผ็ดจี๊ดจ๊าด ทานกับข้าวสวยร้อนๆ หรือเป็นกับแกล้มก็ลงตัว",
        "image": "\/assets\/images\/recipe_20261014_123449_5202c0d4.png",
        "cooking_time": 10,
        "servings": 1,
        "instructions": "1. ซอยพริกขี้หนู หอมแดง ตะไคร้ และต้นหอมเตรียมไว้\r\n2. เปิดปลากระป๋องเทใส่ชามผสมอย่างเบามือ ระวังอย่าให้เนื้อปลาเละ\r\n3. ปรุงรสด้วยน้ำปลา น้ำตาลทรายเล็กน้อย และบีบน้ำมะนาวสด\r\n4. ใส่พริกขี้หนู หอมแดง ตะไคร้ซอย และต้นหอมลงไป คลุกเคล้าเบาๆ ให้เข้ากัน\r\n5. ตักใส่จาน โรยด้วยผักชี พร้อมรับประทาน",
        "views": 1,
        "ingredients": [
            {
                "ingredient_id": 4,
                "name": "ปลากระป๋อง",
                "quantity": "1",
                "unit": "กระป๋อง",
                "is_essential": 1,
                "type": "main",
                "category_group": "เนื้อสัตว์"
            },
            {
                "ingredient_id": 10,
                "name": "พริกขี้หนู",
                "quantity": "5-7",
                "unit": "เม็ด",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 13,
                "name": "หอมแดง",
                "quantity": "3-4",
                "unit": "หัว",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 21,
                "name": "มะนาว",
                "quantity": "1",
                "unit": "ลูก",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 19,
                "name": "ตะไคร้",
                "quantity": "1",
                "unit": "ต้น",
                "is_essential": 0,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 25,
                "name": "น้ำปลา",
                "quantity": "1",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 26,
                "name": "น้ำตาลทราย",
                "quantity": "1\/2",
                "unit": "ช้อนชา",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 16,
                "name": "ต้นหอม",
                "quantity": "1",
                "unit": "ต้น",
                "is_essential": 0,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            }
        ]
    },
    {
        "id": 16,
        "category_id": 1,
        "title": "ผัดเผ็ดหมูสามชั้น",
        "description": "รสเผ็ดจัดจ้าน",
        "image": "\/assets\/images\/recipe_20261014_124423_27c83e11.jpg",
        "cooking_time": 15,
        "servings": 1,
        "instructions": "1. ผัดพริกแกง: ตั้งกระทะใส่น้ำมันพืช ใช้ไฟกลาง ใส่พริกแกงเผ็ดลงไปผัดให้สุกและส่งกลิ่นหอมฟุ้ง(หากต้องการเพิ่มความเผ็ดใส่พริกชี้ฟ้าตำลงไปผัดพร้อมพริกแกงเผ็ด)\r\n2. ผัดหมู: ใส่เนื้อหมูลงไปผัดคลุกเคล้าให้เข้ากับพริกแกงจนเนื้อหมูเริ่มสุก\r\n3. ปรุงรส: ปรุงรสด้วยซอสหอยนางรม น้ำปลา น้ำตาลทราย และผงปรุงรส คลุกเคล้าให้ส่วนผสมซึมเข้าเนื้อหมู\r\n4. ใส่สมุนไพร: ใส่กระชายหั่นฝอย พริกไทยอ่อน พริกหยวกหั่น และใบมะกรูดฉีก ผัดให้เข้ากันดี\r\n5. ปิดท้าย: ใส่ใบโหระพาลงไป ผัดเร็วๆ อีกครั้ง แล้วปิดไฟ พร้อมตักเสิร์ฟคู่กับข้าวสวยร้อนๆ",
        "views": 1,
        "ingredients": [
            {
                "ingredient_id": 55,
                "name": "สามชั้นหมู",
                "quantity": "200",
                "unit": "กรัม",
                "is_essential": 1,
                "type": "main",
                "category_group": "เนื้อสัตว์"
            },
            {
                "ingredient_id": 11,
                "name": "กระเทียม",
                "quantity": "1-2",
                "unit": "กลีบ",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 172,
                "name": "พริกชี้ฟ้า",
                "quantity": "6",
                "unit": "เม็ด",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 169,
                "name": "กระชาย",
                "quantity": "2",
                "unit": "หัว",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 170,
                "name": "พริกหยวก",
                "quantity": "1-2",
                "unit": "เม็ด",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 149,
                "name": "พริกไทยอ่อน",
                "quantity": "1",
                "unit": "พวง",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 20,
                "name": "ใบมะกรูด",
                "quantity": "1-2",
                "unit": "ใบ",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 151,
                "name": "พริกแกงเผ็ด",
                "quantity": "1",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 28,
                "name": "ซอสหอยนางรม",
                "quantity": "1",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 26,
                "name": "น้ำตาลทราย",
                "quantity": "1\/2",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 27,
                "name": "ผงชูรส",
                "quantity": "",
                "unit": "",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 129,
                "name": "ผงปรุงรส",
                "quantity": "1\/2",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 25,
                "name": "น้ำปลา",
                "quantity": "1\/2",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 186,
                "name": "มะเขือพวง",
                "quantity": "",
                "unit": "ตามชอบ",
                "is_essential": 0,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 31,
                "name": "น้ำมันพืช",
                "quantity": "1-2",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            }
        ]
    },
    {
        "id": 17,
        "category_id": 3,
        "title": "ปีกไก่ทอดพริกแกง",
        "description": "ปีกไก่ทอดกรอบพร้อมรสชาติพริกแกง",
        "image": "\/assets\/images\/recipe_20261014_125421_71724aae.png",
        "cooking_time": 45,
        "servings": 1,
        "instructions": "1. เตรียมไก่: ล้างทำความสะอาดเนื้อไก่ หั่นเป็นชิ้นพอดีคำ หากเป็นชิ้นใหญ่สามารถใช้ส้อมจิ้มให้ทั่วเพื่อให้เข้าเนื้อและสุกง่ายขึ้น\r\n2. หมักไก่: นำพริกแกงเผ็ด ใส่ลงไปในชามไก่ ขยำและคลุกเคล้าให้พริกแกงเคลือบเนื้อไก่จนทั่ว หมักทิ้งไว้ประมาณ 10-20 นาที\r\n3. คลุกแป้ง: เติมแป้งทอดกรอบลงไปในเนื้อไก่ที่หมักไว้ คลุกให้แป้งบางๆ เคลือบผิวไก่ (อาจพรมน้ำเย็นเล็กน้อยเพื่อให้แป้งเกาะตัวดีขึ้น)\r\n4. ทอดไก่:\r\n\t• ตั้งกระทะใส่น้ำมันใช้ไฟกลางค่อนไปทางอ่อน รอให้น้ำมันร้อน\r\n\t• นำไก่ลงไปทอด คอยพลิกกลับด้านเพื่อให้สุกทั่วถึงกัน ใช้เวลาประมาณ 10 - 15 นาทีจนไก่สุกเหลืองกรอบ\r\n\t• ช่วง 1-2 นาทีสุดท้าย ให้ใส่ใบมะกรูดซอยลงไปทอดด้วยเพื่อให้มีกลิ่นหอม\r\n5. จัดเสิร์ฟ: ตักขึ้นมาพักไว้บนตะแกรงหรือกระดาษซับน้ำมันให้สะเด็ดน้ำมัน พร้อมรับประทานคู่กับข้าวเหนียวร้อนๆ หรือน้ำจิ้มตามชอบ",
        "views": 0,
        "ingredients": [
            {
                "ingredient_id": 41,
                "name": "ปีกกลางไก่",
                "quantity": "5-7",
                "unit": "ชิ้น",
                "is_essential": 1,
                "type": "main",
                "category_group": "เนื้อสัตว์"
            },
            {
                "ingredient_id": 151,
                "name": "พริกแกงเผ็ด",
                "quantity": "1-2",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 9,
                "name": "เส้นบะหมี่กึ่งสำเร็จรูป",
                "quantity": "100",
                "unit": "กรัม",
                "is_essential": 1,
                "type": "main",
                "category_group": "ไข่และแป้ง"
            },
            {
                "ingredient_id": 20,
                "name": "ใบมะกรูด",
                "quantity": "",
                "unit": "ตามชอบ",
                "is_essential": 0,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 180,
                "name": "พริกแห้ง",
                "quantity": "",
                "unit": "ตามชอบ",
                "is_essential": 0,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 31,
                "name": "น้ำมันพืช",
                "quantity": "",
                "unit": "ท่วมไก่",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            }
        ]
    },
    {
        "id": 18,
        "category_id": 6,
        "title": "ก้อยมะนาว(วัว)",
        "description": "รสชาติจัดจ้าน เปรี้ยวนำ",
        "image": "\/assets\/images\/recipe_20261014_130056_7e2a22f2.png",
        "cooking_time": 15,
        "servings": 1,
        "instructions": "1. เตรียมเนื้อวัว: นำเนื้อวัวสดมาสับหรือหั่นให้เป็นชิ้นเล็กละเอียดตามต้องการ (บางสูตรอาจบีบน้ำมะนาวใส่เนื้อแล้วคั้นน้ำคาวออก หรือนำเนื้อไปรวนในหม้อพอสะดุ้งไฟหากไม่ชอบกินดิบ)\r\n2. ปรุงรส: ใส่พริกป่น ข้าวคั่ว ผงชูรส เกลือ หรือน้ำปลา ลงไปในเนื้อวัว\r\n3. ใส่น้ำมะนาว: บีบน้ำมะนาวสดลงไป คลุกเคล้าให้เข้ากันทั่วถึง\r\n4. ใส่ผัก: เติมหอมแดงซอย ต้นหอม ผักชี และใบมะกรูดซอยลงไป คลุกเบาๆ ให้เข้ากันอีกครั้ง\r\n5. ชิมและจัดเสิร์ฟ: ชิมรสชาติตามชอบ (เน้นเปรี้ยว เผ็ด นัว) ตักใส่จาน พร้อมเสิร์ฟคู่กับผักสด",
        "views": 0,
        "ingredients": [
            {
                "ingredient_id": 70,
                "name": "เนื้อหน้าท้องวัว",
                "quantity": "200",
                "unit": "กรัม",
                "is_essential": 1,
                "type": "main",
                "category_group": "เนื้อสัตว์"
            },
            {
                "ingredient_id": 147,
                "name": "ข้าวคั่ว",
                "quantity": "1-2",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 146,
                "name": "พริกป่น",
                "quantity": "3-4",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 27,
                "name": "ผงชูรส",
                "quantity": "",
                "unit": "ตามชอบ",
                "is_essential": 0,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 145,
                "name": "เกลือ",
                "quantity": "1-2",
                "unit": "หยิบมือ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 25,
                "name": "น้ำปลา",
                "quantity": "1\/2",
                "unit": "ช้อนโต๊ะ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 21,
                "name": "มะนาว",
                "quantity": "1-2",
                "unit": "ลูก",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 13,
                "name": "หอมแดง",
                "quantity": "2-3",
                "unit": "ลูก",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 16,
                "name": "ต้นหอม",
                "quantity": "2-3",
                "unit": "ต้น",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 17,
                "name": "ผักชี",
                "quantity": "1",
                "unit": "ต้น",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 20,
                "name": "ใบมะกรูด",
                "quantity": "1-2",
                "unit": "ใบ",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            }
        ]
    },
    {
        "id": 19,
        "category_id": 6,
        "title": "ปลานิลเผา",
        "description": null,
        "image": "\/assets\/images\/recipe_20261014_130600_5c3b4829.png",
        "cooking_time": 60,
        "servings": 1,
        "instructions": "1. เตรียมปลา:\r\n\t• ผ่าท้องปลา เอาไส้และดีปลาออกให้หมด ล้างน้ำให้สะอาด (ไม่ขอดเกล็ด เพื่อป้องกันไม่ให้เนื้อปลาเค็มเกินไปเวลานำไปเผา)\r\n2. ยัดสมุนไพร:\r\n\t• นำตะไคร้ทุบ ใบมะกรูด หรือใบเตย ยัดใส่เข้าไปในท้องปลา เพื่อดับกลิ่นคาวและเพิ่มความหอม\r\n3. พอกเกลือ:\r\n\t• ผสมเกลือกับน้ำพอประมาณให้เกลือเกาะตัวกันดี\r\n\t• นำเกลือมาพอกให้ทั่วตัวปลา หนาๆ ให้มิดทั้งตัว\r\n4. เผาหรืออบสุก:\r\n\t• กรณีใช้เตาถ่าน: วางบนตะแกรง ใช้ไฟอ่อนถึงไฟกลาง ค่อยๆ ย่างใช้เวลาประมาณ 45-60 นาที จนเกลือแห้งและเนื้อปลาสุก\r\n\t• กรณีใช้หม้อทอดไร้น้ำมัน \/ เตาอบ: ตั้งอุณหภูมิประมาณ 180 องศาเซลเซียส ใช้เวลาประมาณ 40 นาที (กลับด้านระหว่างอบด้วย)\r\n5. วิธีดูว่าสุกหรือยัง:\r\n\t• สังเกตจากเกล็ดกับเนื้อปลาจะไม่ค่อยติดกัน หรือเนื้อปลาไม่ติดกระดูก แสดงว่าสุกพร้อมทาน\r\n\t• เสิร์ฟคู่กับผักสด น้ำจิ้มซีฟู้ด หรือน้ำจิ้มถั่วตัดรสเด็ด",
        "views": 0,
        "ingredients": [
            {
                "ingredient_id": 36,
                "name": "ปลานิล",
                "quantity": "1",
                "unit": "ตัว",
                "is_essential": 1,
                "type": "main",
                "category_group": "เนื้อสัตว์"
            },
            {
                "ingredient_id": 145,
                "name": "เกลือ",
                "quantity": "",
                "unit": "ตามชอบ",
                "is_essential": 1,
                "type": "seasoning",
                "category_group": "เครื่องปรุงรส"
            },
            {
                "ingredient_id": 19,
                "name": "ตะไคร้",
                "quantity": "",
                "unit": "ตามชอบ",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            },
            {
                "ingredient_id": 20,
                "name": "ใบมะกรูด",
                "quantity": "",
                "unit": "ตามชอบ",
                "is_essential": 1,
                "type": "main",
                "category_group": "ผักและสมุนไพร"
            }
        ]
    }
];

// Helper Functions สำหรับจัดการข้อมูลใน LocalStorage
class KitchenData {
    static checkDataVersion() {
        if (localStorage.getItem('kitchen_data_version') !== CURRENT_DATA_VERSION) {
            localStorage.setItem('kitchen_recipes', JSON.stringify(DEFAULT_RECIPES));
            localStorage.setItem('kitchen_ingredients', JSON.stringify(DEFAULT_INGREDIENTS));
            localStorage.setItem('kitchen_data_version', CURRENT_DATA_VERSION);
        }
    }

    static getCategories() {
        return DEFAULT_CATEGORIES;
    }

    static getCategoryById(id) {
        return DEFAULT_CATEGORIES.find(c => c.id === parseInt(id));
    }

    static getIngredients() {
        KitchenData.checkDataVersion();
        const stored = localStorage.getItem('kitchen_ingredients');
        if (stored) {
            try { return JSON.parse(stored); } catch (e) {}
        }
        return DEFAULT_INGREDIENTS;
    }

    static getRecipes() {
        KitchenData.checkDataVersion();
        const stored = localStorage.getItem('kitchen_recipes');
        let recipes = DEFAULT_RECIPES;
        if (stored) {
            try { recipes = JSON.parse(stored); } catch (e) {}
        }

        // เชื่อมโยงข้อมูล Category เข้ากับแต่ละ Recipe พร้อมอัปเดตรูปเริ่มต้นหากข้อมูลเก่าเป็นชื่อไฟล์ชั่วคราว
        return recipes.map(r => {
            const def = DEFAULT_RECIPES.find(d => d.id === r.id);
            let img = r.image;
            if (!KitchenData.hasValidImage(img) && def && KitchenData.hasValidImage(def.image)) {
                img = def.image;
            }
            const cat = KitchenData.getCategoryById(r.category_id) || { name: 'ทั่วไป', icon: 'bi-tag' };
            return {
                ...r,
                image: img,
                category_name: cat.name,
                category_icon: cat.icon,
                total_ingredients: (r.ingredients || []).length
            };
        });
    }

    static resetRecipes() {
        localStorage.setItem('kitchen_recipes', JSON.stringify(DEFAULT_RECIPES));
        return KitchenData.getRecipes();
    }

    static getRecipeById(id) {
        const recipes = KitchenData.getRecipes();
        return recipes.find(r => r.id === parseInt(id)) || null;
    }

    static getImageUrl(image) {
        if (!image || typeof image !== 'string') return '';
        const trimmed = image.trim();
        if (trimmed.startsWith('data:') || trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('/')) {
            return trimmed;
        }
        return '/assets/images/' + trimmed;
    }

    static hasValidImage(image) {
        if (!image || typeof image !== 'string') return false;
        const trimmed = image.trim();
        return trimmed.length > 0;
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
