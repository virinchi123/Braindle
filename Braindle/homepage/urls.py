from django.urls import path
from . import views

urlpatterns= [

    path('',views.home, name='home'), #on opening the page '' means home page we invoke home function from views
    path('mult',views.mult, name='mult') #whenever someone calls mult it should 
]