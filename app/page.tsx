import Image from "next/image";

export default function Home() {
  return (
    <div className="p-12 min-h-screen">
      <main>
        <div>
          <h4 className="font-medium mb-4">
            Harsh Kumar
          </h4>
          <div>
            <span>
              Hi there, I am Software Developer at <span className="text-blue-500">Infosys</span> .
            </span>
          </div>
        </div>
      </main>
      <footer>
        <div className="space-x-4 pt-2">
          <a href="https://github.com/harsh1dev" target="_blank" rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
            github
          </a>
          <a href="https://www.linkedin.com/in/harsh1dev/" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
            linkedin
          </a>
        </div>
      </footer>
    </div>
  );
}
