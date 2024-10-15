import Image from 'next/image';
import getHospital from '@/libs/getHospital';

export default async function HospitalPage(context: { params: any; }) {
    const { hid } = context.params;
    let hospital;

    try {
        const response: HospitalJson = await getHospital(hid);
        hospital = response.data as Object as HospitalItem;

    } catch (error) {
        console.error('Error fetching hospital data:', error);
        return <div>Error fetching hospital details</div>;
    }

    return (
        <div className="container mx-auto py-8 bg-gray-100 rounded-md">
            <div className="flex items-center">
                <div className="relative overflow-hidden px-8">
                    <Image 
                        src={hospital.picture} 
                        alt={hospital.name} 
                        width={400}
                        height={320}
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{hospital.name}</h1>
                    <p>{hospital.address}, {hospital.district} {hospital.province}</p>
                    <p>Postal Code: {hospital.postalcode}</p>
                    <p>Phone: {hospital.tel}</p>
                </div>
            </div>
        </div>
    );
}
