using UnityEngine;
using UnityEngine.AI;

public class EnemyAI : MonoBehaviour
{
    public Transform target; // Kolom untuk memasukkan target (Ethan)
    private NavMeshAgent agent;

    void Start()
    {
        agent = GetComponent<NavMeshAgent>();
    }

    void Update()
    {
        // Memerintahkan musuh untuk selalu mengejar posisi target
        if (target != null)
        {
            agent.SetDestination(target.position);
        }
    }
}
