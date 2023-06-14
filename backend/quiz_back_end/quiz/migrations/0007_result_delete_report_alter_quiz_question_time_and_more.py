# Generated by Django 4.2 on 2023-06-13 19:18

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0006_remove_option_questions_option_question_report_count_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Result',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=100)),
                ('quiz_name', models.CharField(max_length=100)),
                ('correct_answer', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('wrong_answer', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
                ('count', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='Report',
        ),
        migrations.AlterField(
            model_name='quiz',
            name='question_time',
            field=models.IntegerField(default=30, validators=[django.core.validators.MinValueValidator(5)]),
        ),
        migrations.AlterField(
            model_name='quiz',
            name='title',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]