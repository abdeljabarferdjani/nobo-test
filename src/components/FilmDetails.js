import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const FilmDetails = (props) => {
    return(
        <div>
          { props.film ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                        image={props.film.fields.filmImage.fields.file.url}
                        name={props.film.fields.name}
                        summary={props.film.fields.summary}
                        status={props.film.fields.status}
                        language={props.film.fields.language}
                        type={props.film.fields.type}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.film.fields.title}
                        </Typography>
                        <Typography component="p">
                            {props.film.fields.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={props.film.fields.url} target="_blank">
                            Go To Film
                        </Button> 
                    </CardActions>
                </Card>
          ): null }  
        </div>
    )
}
export default FilmDetails