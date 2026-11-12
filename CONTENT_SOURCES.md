# Content sources

Professional background, education, skills, contact links, and LibreDesk contributions are sourced from `assets/chaitanya-raut-resume.pdf`. Project research uses the public repositories under https://github.com/csr4422.

## Selection

Keep three projects: CloudKeep for its storage-provider integration and direct-upload architecture; Issue-Vault for its offline archival pipeline; Sync-D for its persistent, event-driven messaging flow. CloudKeep replaces GitHub Connector to foreground a broader architecture.

Also reviewed Stock-Sage, livestream, and Family_Tree via repository trees and available READMEs. They provide less architectural depth or less complete documentation for this focused selection. Smaller experiments and forks are omitted. LibreDesk stays in the contribution section rather than being presented as an original project.

## Evidence

Source links below are pinned to the tree snapshots retrieved during this update. Claims describe implementation, not production guarantees. No project code was executed.

### CloudKeep

- [README.md](https://github.com/csr4422/CloudKeep/blob/6b0717f48dd1fa75312dd910bc2af285b1b8be38/README.md)
- [backend/files/views.py](https://github.com/csr4422/CloudKeep/blob/6b0717f48dd1fa75312dd910bc2af285b1b8be38/backend/files/views.py)
- [backend/storage_accounts/providers/factory.py](https://github.com/csr4422/CloudKeep/blob/6b0717f48dd1fa75312dd910bc2af285b1b8be38/backend/storage_accounts/providers/factory.py)
- [backend/config/settings.py](https://github.com/csr4422/CloudKeep/blob/6b0717f48dd1fa75312dd910bc2af285b1b8be38/backend/config/settings.py)
- [frontend/src/lib/uploadQueue.js](https://github.com/csr4422/CloudKeep/blob/6b0717f48dd1fa75312dd910bc2af285b1b8be38/frontend/src/lib/uploadQueue.js)

### Issue-Vault

- [README.md](https://github.com/csr4422/Issue-Vault/blob/fb087eadbef27b0a5c2cc30ffef7938907d570fe/README.md)
- [sync.py](https://github.com/csr4422/Issue-Vault/blob/fb087eadbef27b0a5c2cc30ffef7938907d570fe/sync.py)
- [render.py](https://github.com/csr4422/Issue-Vault/blob/fb087eadbef27b0a5c2cc30ffef7938907d570fe/render.py)
- [templates/script.js](https://github.com/csr4422/Issue-Vault/blob/fb087eadbef27b0a5c2cc30ffef7938907d570fe/templates/script.js)

### Sync-D

- [README.md](https://github.com/csr4422/Sync-D/blob/911cc3407559f1bbd142305ba089cbabb295c58b/README.md)
- [backend/src/controllers/message.controller.js](https://github.com/csr4422/Sync-D/blob/911cc3407559f1bbd142305ba089cbabb295c58b/backend/src/controllers/message.controller.js)
- [backend/src/lib/socket.js](https://github.com/csr4422/Sync-D/blob/911cc3407559f1bbd142305ba089cbabb295c58b/backend/src/lib/socket.js)
- [frontend/src/store/useChatStore.js](https://github.com/csr4422/Sync-D/blob/911cc3407559f1bbd142305ba089cbabb295c58b/frontend/src/store/useChatStore.js)

## Link decisions

Each selected project links directly to its repository. Issue-Vault and Sync-D retain demo URLs from the resume, also present in GitHub metadata. Demo availability was not tested. CloudKeep has no demo URL in its current README or repository homepage metadata, so only its verified repository link is shown.

Issue-Vault copy describes pagination rather than automatic rate-limit recovery: the inspected sync implementation reports non-200 responses as errors. Sync-D copy avoids broad security claims and describes the observed storage and event flow.
