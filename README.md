## email: "test@gmail.com",

## password: "200",

এই অ্যাপ্লিকেশনের ডেসক্রিপশন বলতে গেলে এখানে দুইটা পেজ আছে একটা হচ্ছে পাবলিক পেজ এবং প্রাইভেট পেজ | প্রাইভেট পেজটি সংরক্ষিত আছে JWT অথেন্টিকেশন সিস্টেমের মাধ্যমে| যখন ইউজার প্রাইভেট পেজে hit করবে তখন এপ্লিকেশনের middleware চেক দিবে যে ওই ইউজারের cookie te টোকেন আছে কিনা না  যদি থাকে তাহলে ডিরেক্টলি ঢুকতে দিবে আর যদি না থাকে তাহলে sigm in page show korbe. Requirment  অনুযায়ী বলা ছিল যে কোন ডাটাবেজ লাগবে না dummy ইউজ করতে   তাই আমি ইমেইল এবং পাসওয়ার্ড উপরে লিখে দিয়েছি|  ভেরিফিকেশন দিয়েছি যদি আমার ইমেইলের পাসওয়ার্ড যদি same না হয় তাহলে দেখাবে যে ম্যাচ হয় নাই আর যদি কোন একটা ফিল্ড যদি কমপ্লিট না করা হয় তাহলে বলবে যে এই feild টা কমপ্লিট করা হয় নাই|


## Production dile middleware kaj korte se na tai video kore dilam https://staging.streamable.com/mbgx6k  ---npm run dev
https://staging.streamable.com/tz3mgh --- npm start
