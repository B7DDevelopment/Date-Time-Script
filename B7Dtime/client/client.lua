QBCore = exports["qb-core"]:GetCoreObject()

Citizen.CreateThread(function(source)
    while true do
        if LocalPlayer.state.isLoggedIn then
            local src = source
                local PlayerName = GetPlayerName(player)
                local playerPed = PlayerPedId()
                local veh = GetVehiclePedIsIn(playerPed)
                if veh ~= 0 then
                    QBCore.Functions.TriggerCallback('qb-scoreboard:server:GetScoreboardData', function(players, data)
                        -- QBCore.Functions.TriggerCallback('GetScoreboardData', function(data)

                        SendNUIMessage({
                            open = 'time',

                        })
                    end)
                    
                else
                    SendNUIMessage({
                        open = true,

                    })
                end
            end

            Citizen.Wait(500)
        end
    
end)
