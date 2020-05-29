from django.urls import path
from . import views

urlpatterns= [

    path('',views.index, name='index'), #on opening the page '' means home page we invoke home function from views
   # path('mult',views.mult, name='mult') whenever someone calls mult it should 
   path('about.html',views.about,name='about'),
   path('index.html',views.index,name='index'),
   path('blog.html',views.blog,name='blog'),
   path('projects.html',views.projects,name='projects'),
   path('contact.html',views.contact,name='contact'),
   path('services.html',views.services,name='services')
]