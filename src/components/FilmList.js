import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Film from '../components/Film'


class FilmList extends Component {

    constructor() {
        super();
        this.state = {
            films: [],
            searchString: ''
        }

        this.getFilms = this.getFilms.bind(this);
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
    }

    componentDidMount() {
        this.getFilms();
    }

    getFilms() {
        fetch("https://api.tvmaze.com/search/shows?q=test")
        .then(resp => resp.json())
        .then(resp  => console.log(resp[0]))
        .then(resp =>
            this.setState({films: resp})
        )
        .then(resp  => console.log(this.state.films))
        .catch((error) => {
            console.log("Error occured while fetching data")
            console.log(error)
        })
    }

    onSearchInputChange (event) {
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getFilms()
    }

    render() {
        return (
            <div>
                {this.state.films ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Films"
                            margin="normal"
                            onChange={this.onSearchInputChange} />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.films.map(currentFilm => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Film film={currentFilm} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No films found" }
            </div>
        )
    }
}
export default FilmList;