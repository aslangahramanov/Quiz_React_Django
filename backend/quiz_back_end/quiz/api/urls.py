from django.contrib import admin
from django.urls import path
from quiz.api import views

app_name = "api"



urlpatterns = [
    path("quiz/", views.QuizListCreateAV.as_view(), name='quiz-list'),
    path("quiz/<int:pk>", views.QuizDetailAPIView.as_view(), name='quiz-detail'),
    
    path("question/", views.QuestionListCreateAV.as_view(), name='question-list'),
    path("question/<int:pk>", views.QuestionDetailAPIView.as_view(), name='question-detail'),

    path("options/", views.OptionListCreateAV.as_view(), name='options-list'),
    path("options/<int:pk>", views.OptionDetailAPIView.as_view(), name='options-detail'),
    
    path("report/", views.ReportListCreateAV.as_view(), name='report-list'),
    path("report/<int:pk>", views.ReportDetailAPIView.as_view(), name='report-detail'),
]