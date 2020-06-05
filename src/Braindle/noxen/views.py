from django.shortcuts import render
from django.core.cache import cache
import sqlite3

# Create your views here.

conn=sqlite3.connect(r'C:\Users\Dell\projects\test.db')
cursor = conn.execute('Select BrandID, Model, Recyclecount from Pencount;')
i=0
brands=[1,0,0]
counts=[0,0,0]
weights=[0,0,0]

for row in cursor:
    brands[i]=row[1]
    counts[i]=row[2]
    weights[i]=counts[i]*30
    i=i+1
conn.close()

def index(request):

    cache.clear()
    conn=sqlite3.connect(r'C:\Users\Dell\projects\test.db')
    cursor = conn.execute('Select BrandID, Model, Recyclecount from Pencount;')
    i=0
    brands=[1,0,0]
    counts=[0,0,0]
    weights=[0,0,0]

    for row in cursor:
        brands[i]=row[1]
        counts[i]=row[2]
        weights[i]=counts[i]*30
        i=i+1
    conn.close()
    
    return render(request,'index.html',{'b1':brands[0],'b2':brands[1],'b3':brands[2],'c1':counts[0],'c2':counts[1],'c3':counts[2],'w1':weights[0],'w2':weights[1],'w3':weights[2]})

def about(request):
    cache.clear()
    conn=sqlite3.connect(r'C:\Users\Dell\projects\test.db')
    cursor = conn.execute('Select BrandID, Model, Recyclecount from Pencount;')
    i=0
    brands=[1,0,0]
    counts=[0,0,0]
    weights=[0,0,0]

    for row in cursor:
        brands[i]=row[1]
        counts[i]=row[2]
        weights[i]=counts[i]*30
        i=i+1
    conn.close()
    return render(request,'about.html',{'b1':brands[0],'b2':brands[1],'b3':brands[2],'c1':counts[0],'c2':counts[1],'c3':counts[2],'w1':weights[0],'w2':weights[1],'w3':weights[2]})

def blog(request):
    cache.clear()
    return render(request,'blog.html')

def projects(request):
    cache.clear()
    conn=sqlite3.connect(r'C:\Users\Dell\projects\test.db')
    cursor = conn.execute('Select BrandID, Model, Recyclecount from Pencount;')
    i=0
    brands=[1,0,0]
    counts=[0,0,0]
    weights=[0,0,0]

    for row in cursor:
        brands[i]=row[1]
        counts[i]=row[2]
        weights[i]=counts[i]*30
        i=i+1
    conn.close()
    
    return render(request,'projects.html',{'b1':brands[0],'b2':brands[1],'b3':brands[2],'c1':counts[0],'c2':counts[1],'c3':counts[2],'w1':weights[0],'w2':weights[1],'w3':weights[2]})


def contact(request):
    cache.clear()
    return render(request,'contact.html')

def services(request):
    cache.clear()
    return render(request,'services.html')