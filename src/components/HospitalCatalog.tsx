import Card from './Card';

interface HospitalJson {
    data: HospitalItem[];
}

export default async function HospitalCatalog({ hospitalsJson }: { hospitalsJson: HospitalJson }) {
    const hospitals: HospitalItem[] = hospitalsJson.data; 

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {hospitals.slice(0, 3).map(hospital => (
                <Card 
                    key={hospital.id}
                    hid={hospital.id}
                    hospitalName={hospital.name}
                    imgSrc={hospital.picture}
                    rating={0}
                />
            ))}
        </div>
    );
}
