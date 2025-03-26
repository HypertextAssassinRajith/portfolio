import { UilCloudDatabaseTree, UilIllustration, UilWindow } from '@iconscout/react-unicons'

export default function Services() {
    const services = [
      { title: "Ui/Ux Design", icon: <UilWindow size={50} color="#8200DB" />, link: "#" },
      { title: "Backend Developer", icon: <UilCloudDatabaseTree  size={50} color="#8200DB" />, link: "#" },
      { title: "Creative Designer", icon: <UilIllustration  size={50} color="#8200DB" />, link: "#" },
    ];
  
    return (
      <div className="flex flex-col items-center p-10 bg-white min-h-screen">
        <h2 className="text-4xl font-bold text-black">Services</h2>
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-500 mt-2">You can hire me</p>
  
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3  gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition h-64 w-64"
            >
              <div className="text-purple-600 text-3xl">{service.icon}</div>
              <h3 className="text-lg font-semibold mt-4 text-black">{service.title}</h3>
              <a href={service.link} className="text-purple-600 mt-2 flex items-center hover:text-purple-800 transition-transform decoration-300 group">
                View More <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">»</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  