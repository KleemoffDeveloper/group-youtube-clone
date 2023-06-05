import './ResponsiveSearchbar.css'

export default function ResponsiveSearchbar({handleSearch, setSearch, search, toggle}){
    return (
        <div className='rs-search'>
            <img src="https://www.svgrepo.com/show/500472/back.svg" onClick={() => toggle(false)} className='back-button'/>
            <form onSubmit={handleSearch} className="search">
                <input
                  className="search-bar"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value)
                    e.target.value = search
                  }}
                  value={search}
                />
                <button type="submit" className="search-button">Submit</button>
              </form>
        </div>
    )
}