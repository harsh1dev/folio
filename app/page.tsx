
export default function Home() {
  return (
    <div className="p-12 min-h-screen max-w-[64ch] w-full mx-auto">
      <main>
        <div>
          <h4 className="font-medium mb-8">
            Harsh Kumar
          </h4>
          <div>
            <span className="text-gray-800">
              I&apos;m software developer. I work at <span className="text-blue-500">Infosys</span>, where I create ui for
              multiple applications based on the client requirements using <span className="text-blue-500">Angular</span>.
              <br />
              <br />
              I have 2 years of software developer experience, and currently I am expanding my knowledge in system design
              and build scalable applications.
            </span>
          </div>
        </div>
      </main>
      <footer>
        <div className="space-x-4 pt-4 flex justify-center w-[90%]">
          <a href="https://github.com/harsh1dev" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
            github
          </a>
          <a href="https://www.linkedin.com/in/harsh1dev/" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
            linkedin
          </a>
          <a href="https://drive.google.com/file/d/13xleXJCTVXXqHCOcU3TSJN7rgvUeltol/view" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
            resume
          </a>
        </div>
      </footer>
    </div>
  );
}
