<?php
$login_form=<<<EOD
<meta name="viewport" content="width=device-width, initial-scale=1">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="$root/wp-content/plugins/google_map_plugin/css/styles.css">

<style>
nav ul{
  height: 300px; 
  width:100%;
}
nav ul{
  overflow:hidden; 
  overflow-y:scroll;
}
#store_list{
  padding-right: 0px;
  padding-left: 0px;
}
#map_div{
  padding-right: 0px;
  height: 100%;
}
nav li{
  padding-left: 15px;
  height: 125px;
  border: 1px solid black;
}
.dropdown-toggle:after {
  display: none;
}
.row{
  height: 100%;
}
#search_box{}
#mapCon{
  width: 100%;
  height: 100%;
  border: 5px solid grey;
}
p {
  font-size: 10px;
  line-height: 2px;
  margin: 0px;
  padding-left: 0px;
}
#store_box_titles {
  margin-top: 5px;
  margin-bottom: 0px;
}
</style>


<div class="container-fluid" id="mapCon" >

  <div class="row">

        <div class="col-xs-4" id="store_list">          
            <header><input id="search_box" type="text" placeholder="Search"></header>
                <nav>
                    <ul id="scrolling_store_list">
                    </ul>
                </nav>
        </div>

        <div class="col-xs-8" id="map_div">
          <div style="width: 100%;" id="map" >
          </div>
        </div>

  </div>
</div>


<script type="text/javascript" src="$map_details_call"></script>
<script src="$login_path"></script>
<script src="$plugin_path"></script>
<script async defer
     src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcvdwJXnRdAa3TNcwDt5emB7Z4Mpc_Zl8&libraries=places&callback=initCurrentMap">
</script>
EOD;

?>