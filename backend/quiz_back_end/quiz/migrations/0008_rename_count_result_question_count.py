# Generated by Django 4.2 on 2023-06-13 19:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0007_result_delete_report_alter_quiz_question_time_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='result',
            old_name='count',
            new_name='question_count',
        ),
    ]
