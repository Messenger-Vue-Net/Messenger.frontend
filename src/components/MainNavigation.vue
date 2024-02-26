<template>
    <div class="sidebar">
      <div class="user-icon">
        <img class="user-icon" src="../assets/user-icon.jpeg" alt="User Icon">
      </div>
  
      <div class="nav-item">
        <router-link to="messenger" class="nav-item">Мессенджер</router-link>
      </div>
  
      <div class="nav-item">
        <router-link to="login" class="nav-item">Вход</router-link>
      </div>
  
      <div class="nav-item">
        <router-link to="registration" class="nav-item">Регистрация</router-link>
      </div>
  
      <div class="nav-item">
        <router-link to="chats" class="nav-item">Чаты</router-link>
      </div>
  
      <div class="nav-item" >
        <router-link to="/logout" class="nav-item">Выход</router-link>
      </div>
  
    </div>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  
  .user-icon img{
    margin-bottom: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  
  .nav-item {
    cursor: pointer;
    margin-bottom: 10px;
    color: white;
    text-decoration: none;

  }
  
  .nav-item:hover {
    border-radius: 20%;
  }
  </style>
  