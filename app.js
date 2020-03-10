// Initialize Cloud Firestore through Firebase

firebase.initializeApp({
    apiKey: "AIzaSyAqTGGweBNmGo7jz5t36bR114WZpJ6-sKg",
    authDomain: "jossman-38705.firebaseapp.com",
    projectId: "jossman-38705",
  });
  
  var db = firebase.firestore();

  function guardar(){

    var nombre=document.getElementById('nombre').value;
    var correo=document.getElementById('correo').value;
    var telefono=document.getElementById('telefono').value;
    var comentario=document.getElementById('comentario').value;

    db.collection("usuarios").add({
        comentario:comentario,
        correo:correo,
        nombre:nombre,
        telefono:telefono
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);

     nombre=document.getElementById('nombre').value='';
     correo=document.getElementById('correo').value='';
     telefono=document.getElementById('telefono').value='';
     comentario=document.getElementById('comentario').value='';

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  }

  