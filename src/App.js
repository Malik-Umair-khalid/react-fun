import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div class=" container-fluid">
        <nav class="p-2 navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="../index.html">Home <span class="visually-hidden">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Action 1</a>
                            <a class="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form class="d-flex my-2 my-lg-0">
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    <div class="list-group ula mt-3">
        <a href="#" class="bgb  bg-dark list-group-item list-group-item-action active">React Topics</a>         
        <a href="#def" class="list-group-item list-group-item-action">React Defination</a>
        <a href="#spampa" class="list-group-item list-group-item-action">Single vs Multiple Page Application</a>
        <a href="#avsr" class="list-group-item list-group-item-action">Angular vs react</a>
        <a href="#rdvsvd" class="list-group-item list-group-item-action">Real Dom vs Vertual Dom</a>
      </div>
      <div class="cssDiv m-3">
    </div>
        <div>
          <h1 class="font-monospace" id="def">
            React Defination
          </h1>
          <p>React Is A Javascript Library Which Is Used To Make User Interfaces.React is based on components </p>
        </div>
  
        <div>
          <h1 class=" font-monospace" id="spampa">
            Single Page Application vs Multipage Application
          </h1>
          <p class="">
            <b>single Page Application</b> is an application in which the whole app is build in a single page while in <b>Multipage Application</b> the app is build in multiple pages which effects the perfomance of the app.
            we can build single page application by using react, angular and other javascript libraries.
          </p>
        </div>

                <div>
          <h1 class=" font-monospace" id="avsr">
            Angular vs React 
          </h1>
          <p class="">
            <b>React</b>is build and managed by facebock while <b>angular</b> is build and managed by Google. Both react and Angular are very brutal for building interactive UI. React Is A Javascript Library While angular is Javascript framwork.The react is essential and easy to learn by biggners. The routing is easy in angular as compared to react
          </p>
        </div>
        
        <div>
          <h1 class=" font-monospace" id="lvsf">
            Library Vs Framwork 
          </h1>
          <p class="">
            A <b>Library</b>is collection of code while <b>Framwork</b> is collection of libraries.
            A library is just like the home where we have no restrictions like we can place the bag where ever we want.
            We can do what ever we want in our Home. But The <b>Framwork</b> is like School where Everyone have 
            restrictions and we have to follow the rules if we dont do that we may suffer difficulties.
          </p>
        </div>

        <div>
          <h1 class=" font-monospace" id="rdvsvd">
            Real Dom Vs Vertual Dom 
          </h1>
          <p class="">
            The DOM stands For Dociment Object Model. The Real Dom Is Used The render Html through Javascript. If we work in a real dom and suppose the we have three h1 elements,
            and we Changed the one Of h1 Heading Then I  Have to reload the page to see the changes. Again and again to add changes I always have to Reload And also  have to More Extra code,
            Now The <b>vertual dom</b> helps doing that The vertual dom compares the Old dom and updated dom and figure out the changes and change the specific updated section without again and again reloading the page 
          </p>
        </div>
    </div>

  );
}

export default App;
