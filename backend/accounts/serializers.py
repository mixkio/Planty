from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer



class CustomRegisterSerializer(RegisterSerializer):
    # 기본 설정 필드: username, password, email
    # 추가 설정 필드: date_of_birth
    date_of_birth = serializers.DateField()

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['date_of_birth'] = self.validated_data.get('date_of_birth', '')

        return data

# class UsernameCheckSerializer()