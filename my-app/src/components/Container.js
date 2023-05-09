// import Home from "./pages/Home";
// import SingleBook from "./pages/SingleBook";
// import BooksApi from "./BooksApi";

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState("Home");

//   // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//   const renderPage = () => {
//     if (currentPage === "Home") {
//       return <Home />;
//     }

//     if (currentPage === "SingleBook") {
//       return <SingleBook />;
//     }
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <BooksApi currentPage={currentPage} handlePageChange={handlePageChange} />

//       {renderPage()}
//     </div>
//   );
// }
