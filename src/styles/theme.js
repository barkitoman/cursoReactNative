

export const colors = {
    white: '#FFFFFF',
    red: '#fe3f38',
    grayLighter: '#F5F7FA',
    black: '#000000',
    green: '#37B46E',
    blue: '#0B2B57',
    yellow: '#F0D506',
    
};

export const theme = {
    Button: {
        containerStyle: {
            width: '100%',
            marginTop: 10,
            color: 'black',
            borderRadius: 25,
        },
        buttonStyle: {
            backgroundColor: colors.white,
            borderRadius: 26,
        },
        titleStyle: {
            color: colors.black,
            fontSize: 18,
        },
        disabledStyle: {
            backgroundColor: colors.white,
            opacity: 0.3,
        },
        disabledTitleStyle: {
            color: colors.white,
            fontSize: 18,
        }
    },
    Input:{
        containerStyle: {
            paddingHorizontal: 0,
        },
        inputStyle: {
            fontSize: 14,
            height: '100%',
        },
        inputContainerStyle: {
            borderWidth: 1,
            backgroundColor: colors.white,
            borderRadius: 25,
            paddingHorizontal: 16,
        },
    }
}
