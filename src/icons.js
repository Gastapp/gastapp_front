import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function getIcon(name, size, color) {
    
    const icons = {
        "logout": <Icon name="exit-to-app" size={size || 30} color={color ||"#010000"} />,
        "up-arrow": <Icon name="arrow-up-bold-circle" size={size || 30} color={color ||"#008000"} />,
        "down-arrow": <Icon name="arrow-down-bold-circle" size={size || 30} color={color ||"#DC0000"} />,
        "balance": <Icon name="chart-line-variant" size={size || 30} color={color ||"#008000"} />,
        "plus": <Icon name="plus-box" size={size || 30} color={color ||"#1E90FF"} />,
        "exp-amount" : <Icon name="coin" size={size || 30} color={color ||"#A9A9A9"} />,
        "exp-category" : <Icon name="file-cabinet" size={size || 30} color={color ||"#A9A9A9"} />,
        "exp-description" : <Icon name="file-document-outline" size={size || 30} color={color ||"#A9A9A9"} />,
        "exp-date" : <Icon name="calendar-range" size={size || 30} color={color ||"#A9A9A9"} />,
        "user" : <Icon name="account" size={size || 30} color={color ||"#A9A9A9"} />,
        "password" : <Icon name="lock-outline" size={size || 30} color={color ||"#A9A9A9"} />,
        "email" : <Icon name="mailbox" size={size || 30} color={color ||"#A9A9A9"} />,
        "casa": <Icon name="home" size={30} color={color ||"#F4A460"} />,
        "comida": <Icon name="food" size={30} color={color || "#F0E68C"} />,
        "entretenimiento": <Icon name="controller-classic" size={30} color={color ||"#000000"} />,
        "otro": <Icon name="dots-horizontal-circle" size={30} color={color ||"#A9A9A9"} />,
        "ropa": <Icon name="tshirt-crew" size={30} color={color ||"#008B8B"} />,
        "servicios": <Icon name="bank" size={30} color={color ||"#87CEFA"} />,
        "salud": <Icon name="cards-heart" size={30} color={color ||"#D42C2C"} />,
        "transporte": <Icon name="car" size={30} color={color ||"#0000CD"} />,
        "inversiones": <Icon name="arrow-top-right" size={30} color={color ||"#3CB371"} />,
        "premio": <Icon name="seal" size={30} color={color ||"#E4DA83"} />,
        "regalo": <Icon name="gift" size={30} color={color ||"#F06060"} />,
        "venta": <Icon name="coin" size={30} color={color ||"#008B8B"} />,
    };

    return(
        icons[name]
    );
}

