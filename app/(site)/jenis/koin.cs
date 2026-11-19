using UnityEngine;

public class AmbilKoin : MonoBehaviour
{
    // Fungsi ini otomatis berjalan saat ada objek yang menembus koin
    void OnTriggerEnter(Collider other)
    {
        // Jika yang menembus koin memiliki Tag "Player" (Ethan)
        if (other.CompareTag("Player"))
        {
            // Hancurkan koin ini dari permainan
            Destroy(gameObject);
        }
    }
}