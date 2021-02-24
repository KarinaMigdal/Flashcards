<template>
  <div>
    <router-view/>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  background-attachment: fixed;
  background-color: #f8c1bf;
  background-image: linear-gradient(19deg, #fcc1be 0%, #c5f1f1 100%);
  display: flex;
  align-items: center;
  justify-content: center; 
}

body {
  font-size: 15px;
  font-family: 'Quicksand', sans-serif;
  text-align: center;
}

/* SCROLLBAR */
/* width */
::-webkit-scrollbar {
  width: 3px; 
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 3px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(179, 179, 179); 
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(122, 122, 122); 
}

/* TOOLTIP */
.tooltiptext {
  visibility: hidden;
  font-size: 12px;
  width: 130px;
  background-color:rgb(253, 253, 253);
  letter-spacing: 0;
  border-radius: 15px;
  color: black;
  border: 1px solid black;
  padding: 5px 5px;
  position: absolute;
  z-index: 1;
  bottom: 110%;
  left: 50%;
  margin-left: -65px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 6px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* BUTTON */
.btn {
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  color: white;
  letter-spacing: 2px;
  width: 100%;
  cursor: pointer;
  background-color: lightcoral;
  border: none;
  border: 1px solid rgb(165, 165, 165);
  border-radius: 15px;
  transition: background-color 0.4s ease-in;
  box-shadow: -2px 1px 9px -1px rgb(0 0 0 / 53%);

}

.btn:hover  {
  background-color: rgb(221, 96, 96); 
}

.btn:focus {  
  outline: none;
  background-color: rgb(221, 96, 96);
}

/*FRAME */

.card-frame {
  background:rgb(253, 253, 253);
  border: solid black;
  border-color: black;  
  border-width: 3px 3px 5px 5px;
  border-radius:4% 95% 6% 95%/95% 4% 92% 5%;
}

/* ICON */
.icon-medium {
  height: 35px;
  cursor: pointer;
}

/* INPUT */
.input-style {
  font-size: 25px;
  text-align: center;
  margin-bottom: 0;
  border: none;
  border-bottom: 2px solid black;
  opacity: 0.6;
  font-family: 'Quicksand', sans-serif;
  background-color: rgb(245, 245, 245, 0);
  padding: 12px 20px;
  transition: width 0.4s, opacity 0.2s;
}

.input-style:hover {
  opacity: 1;
  border: none;
  border-bottom: 2px solid black;
}

/* Validation: */
.invalid-input {
  border: none;
  border-bottom: 1px solid rgb(248, 10, 10);
  color:  rgb(240, 51, 51);
}

.invalid-input:focus {
  border: none;
  border-bottom: 1px solid black;
  color: black;
}  

.error {
  position: absolute;
}

.activeError {
  opacity: 0.1;
}

.header {
  text-transform: uppercase;
}

</style>
