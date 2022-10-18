package com.hospital.p_citas.citas.funciones;
import java.security.SecureRandom;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Funciones {

    // Method to generate a random alphanumeric password of a specific length
    public static String generarId(int len)
    {
        // ASCII – datos alfa numericos (0-9, a-z, A-Z)
        final String CARACTERES = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        //Random
        SecureRandom random = new SecureRandom();

        // Creamos password
        return IntStream.range(0, len)
                .map(i -> random.nextInt(CARACTERES.length()))
                .mapToObj(randomIndex -> String.valueOf(CARACTERES.charAt(randomIndex)))
                .collect(Collectors.joining());
    }

}
