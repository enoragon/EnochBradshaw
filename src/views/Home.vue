<template>
<div>
  <v-parallax :src='backgroundImg'>
	<v-layout column align-center justify-center>
		<img class="round-frame elevation-17" src="../assets/face.jpg">
	  <h1>Enoch Bradshaw</h1>
	  <h4>Programmer, Artist, Musician</h4>
	</v-layout>
  </v-parallax>

	<v-flex xs12 sm6 offset-sm3>
	  <v-card>
		<v-card-media
		  class="white--text"
		  height="200px"
		  src="/static/doc-images/cards/docks.jpg">
		  <v-container fill-height fluid>
			<v-layout fill-height>
			  <v-flex xs12 align-end flexbox>
				<span class="headline">Top 10 Australian beaches</span>
			  </v-flex>
			</v-layout>
		  </v-container>
		</v-card-media>
		<v-card-title>
		  <div>
			<span class="grey--text">Number 10</span><br>
			<span>Whitehaven Beach</span><br>
			<span>Whitsunday Island, Whitsunday Islands</span>
		  </div>
		</v-card-title>
		<v-card-actions>
		  <v-btn flat color="orange">Share</v-btn>
		  <v-btn flat color="orange">Explore</v-btn>
		</v-card-actions>
	  </v-card>
	</v-flex>
	   <v-flex xs12 sm6 offset-sm3>
	  <v-card>
		<v-card-media
		  class="white--text"
		  height="200px"
		  src="/static/doc-images/cards/docks.jpg">
		  <v-container fill-height fluid>
			<v-layout fill-height>
			  <v-flex xs12 align-end flexbox>
				<span class="headline">Top 10 Australian beaches</span>
			  </v-flex>
			</v-layout>
		  </v-container>
		</v-card-media>
		<v-card-title>
		  <div>
			<span class="grey--text">Number 10</span><br>
			<span>Whitehaven Beach</span><br>
			<span>Whitsunday Island, Whitsunday Islands</span>
		  </div>
		</v-card-title>
		<v-card-actions>
		  <v-btn flat color="orange">Share</v-btn>
		  <v-btn flat color="orange">Explore</v-btn>
		</v-card-actions>
	  </v-card>
	</v-flex>
	   <v-flex xs12 sm6 offset-sm3>
	  <v-card>
		<v-card-media
		  class="white--text"
		  height="200px"
		  src="/static/doc-images/cards/docks.jpg">
		  <v-container fill-height fluid>
			<v-layout fill-height>
			  <v-flex xs12 align-end flexbox>
				<span class="headline">Top 10 Australian beaches</span>
			  </v-flex>
			</v-layout>
		  </v-container>
		</v-card-media>
		<v-card-title>
		  <div>
			<span class="grey--text">Number 10</span><br>
			<span>Whitehaven Beach</span><br>
			<span>Whitsunday Island, Whitsunday Islands</span>
		  </div>
		</v-card-title>
		<v-card-actions>
		  <v-btn flat color="orange">Share</v-btn>
		  <v-btn flat color="orange">Explore</v-btn>
		</v-card-actions>
	  </v-card>
	</v-flex>
</div>


</template>

<script>
import * as rockImg from '../assets/rock.jpg';

export default {
	data () {
		return{
			backgroundImg: rockImg
		}
	}
}
</script>

<style>
	.round-frame{
		border-radius: 100%;
		border:1em solid whitesmoke;
		box-shadow: 0px 0px 40px 40px #000000;
	}
</style>
