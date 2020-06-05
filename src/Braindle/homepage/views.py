from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    #return HttpResponse("Hello world") #prints hello world on site screen
    return render(request,'home.html',{'name':'Navin'}) #requesting home.html render merges the dynamic with static content displays everything in home.html

def mult(request):

    val1 = int(request.GET['num1']) #The request the user sends contains objects with these values inside
    val2 = int(request.GET['num2'])
    res = val1*val2
    return render(request,'result.html',{'result':res})