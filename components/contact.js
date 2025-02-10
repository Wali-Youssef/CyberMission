const Contact = () => {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Nom</label>
            <input type="text" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Prénom</label>
            <input type="text" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Adresse e-mail</label>
            <input type="email" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Envoyer
          </button>
        </form>
      </section>
    );
};
  
export default Contact;
