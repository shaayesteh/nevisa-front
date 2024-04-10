import Image from 'next/image'
import baladrah from "../../../public/baladrah.jpeg"

export default function Header() {
  return (
    <main className='flex justify-between'>
        <div>
            <input type="text" />
        </div>
        <div className='flex justify-between'>
            <div>درباره ما</div>
            <div>بلاگ</div>
            <div>سفارش</div>
            <div>خانه</div>
        </div>
        <div>
            <Image src={baladrah.src} alt='a' width={50} height={50} />
        </div>
    </main>
  );
}
