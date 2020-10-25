import React from 'react'
import Card from './Card/Card'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home_section'>
                <Card 
                bar="satu"
                src="https://img.staging.kitabisa.cc/size/664x357/0f9a7205-79ef-49c9-a95a-49347fbd00a6.jpg"
                title="#BisaBangkit Bersama Kitabisa"
                terkumpul="Rp. 178.613.497"
                sisahari="0 " 
                percentage="35.72%"
                />
                <Card 
                src="https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/29755/31__1489611820_67821505206_f.jpg"
                title="ponpes al-muawanah tasikmalaya kebakaran"
                bar="dua"
                terkumpul="Rp. 600.711"
                sisahari="0 " 
                percentage="0.20%"
                />
                <Card 
                src="https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/78942/31_78942_1545049253_878259_f.jpg"
                title="Bantu Korban Gempa dan Tsunami Palu-Donggala"
                bar="tiga"
                terkumpul="Rp. 17.024.031.016"
                sisahari="85" 
                percentage="56.74%"
                />
            </div>
            
            <div className='home_section'>
                <Card 
                src="https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/95686/31_95686_1545889945_205911_f.jpg"
                title="URGENT! Peduli Korban Tsunami Banten dan Lampung"
                bar="empat"
                terkumpul="Rp. 5.744.489.104"
                sisahari="0 "
                percentage="0.22%" 
                />
                <Card 
                src="https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/45695/31__1511333547_84686577928_f.jpg"
                title="BANTU KELUARGA KORBAN KEBAKARAN"
                bar="lima"
                terkumpul="Rp. 742.792"
                sisahari="0 " 
                percentage="0.74%"
                />
                <Card 
                src="https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/42043/31_42043_1507197617_794756_f.png"
                title="Bantu sekolah dan rumah diterjang banjir"
                bar="enam"
                terkumpul="Rp. 856.491"
                sisahari="0 " 
                percentage="0.28%"
                />
            </div>
            <div className='home_section'>
                <Card 
                src="https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/35196/31__1497021712_77171538167_f.jpg"
                title="Bantu Korban Kebakaran Palembang"
                bar="tujuh"
                terkumpul="Rp. 60.826"
                sisahari="0 " 
                percentage="0%"
                />
                <Card 
                src="https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/95887/31_95887_1545573085_140965_f.jpg"
                title="Rachel Untuk Tsunami Banten dan Lampung"
                bar="delapan"
                terkumpul="Rp. 522.089.246"
                sisahari="0" 
                percentage="100%"
                />
                <Card 
                src="https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/41584/31_41584_1506369549_748730_f.jpg"
                title="Peduli Erupsi Gunung Agung, Karangasem-Bali"
                bar="sembilan"
                terkumpul="Rp. 4.166.416"
                sisahari="0" 
                percentage="0.41%"
                />
            </div>
        </div>
    )
}

export default Home
