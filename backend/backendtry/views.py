from django.shortcuts import render
from django.http import JsonResponse
from .models import Account
from .serializers import AccountSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

def account_template(request):
    account = Account.objects.all()
    
    serializer = AccountSerializer(account, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Hello From Adjo"})