Vim�UnDo� }K�Y= �m��G�p���N�q�L�/�tN�]   �   B  if (configWhitelist(user, info) && configBlacklist(user, info)){                             [`��    _�                     �        ����                                                                                                                                                                                                                                                                                                                                                             [;�R     �   �   �          �        require('../notify/notifier').notify(user, '*[VIP] message:*\n' + info.pmsg.headers.from + '\n*Subject:*\n' + info.pmsg.headers.subject + "\n*VIP:*\n" + vipString);�   �   �          �          require('../notify/notifier').notify(user, '*[VIP] message:*\n' + info.pmsg.headers.from + '\n*Subject:*\n' + info.pmsg.headers.subject);�   �   �          �          require('../notify/notifier').notify(user, '*[VIP] message:*\n' + info.pmsg.headers.from + '\n*Subject:*\n' + info.pmsg.headers.subject + "\n*VIP:*\n" + vipArr[0]);5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             [;�U     �   
      �       �   
      �    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  v        [;�W     �   
      �      v5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  v        [;�Y     �   
      �      v5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                  v        [;�e    �   
      �      'var not = require('../notify/notifier')5�_�                    �   4    ����                                                                                                                                                                                                                                                                                                                                                             [;��     �   �   �   �      6        if (!vipArr.includes(info.pmsg.headers.from)){5�_�                    �   ?    ����                                                                                                                                                                                                                                                                                                                                                             [;��     �   �   �   �      C        if (!vipArr.includes(info.pmsg.headers.from) && vipArr[-]){5�_�      	              �   A    ����                                                                                                                                                                                                                                                                                                                                                             [;��    �   �   �   �      C        if (!vipArr.includes(info.pmsg.headers.from) && vipArr[0]){5�_�      
           	   �       ����                                                                                                                                                                                                                                                                                                                                                             [;�    �   �   �   �            if (counter <= 1){5�_�   	              
   �        ����                                                                                                                                                                                                                                                                                                                                                             [>^$    �   �   �           5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                             [`��     �         �      @function list(pre, res, user, oauth2, messages, info, callback){5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [`��    �         �      N  User.findOneAndUpdate({id: user.id}, {$push:{idBlacklist: messages[0].id}});5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                                             [`��     �   !   #   �      P    User.findOneAndUpdate({id: user.id}, {$push:{idBlacklist: messages[0].id}});5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [`��     �         �      B  if (configWhitelist(user, info) && configBlacklist(user, info)){5�_�                        +    ����                                                                                                                                                                                                                                                                                                                                                             [`��    �         �      H  if (await configWhitelist(user, info) && configBlacklist(user, info)){5��