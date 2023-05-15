// https://www.redditstatic.com/desktop2x/devPlatform-components-ContextActions.ec6ac883f3ac38fb968f.js
// Retrieved at 5/15/2023, 7:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["devPlatform-components-ContextActions"], {
		"./src/devPlatform/components/ContextActions/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var i = o("./node_modules/react/index.js"),
				d = o.n(i),
				a = o("./node_modules/react-redux/es/index.js"),
				r = o("./node_modules/reselect/es/index.js"),
				s = o("./src/reddit/actions/toaster.ts"),
				n = o("./src/reddit/contexts/PageLayer/index.tsx"),
				l = o("./src/reddit/controls/Dropdown/Row.tsx"),
				c = o("./src/reddit/icons/fonts/index.tsx"),
				u = o("./src/reddit/models/Toast/index.ts"),
				m = o("./src/reddit/selectors/experiments/devPlatform.ts"),
				v = o("./src/devPlatform/components/ContextActions/index.m.less"),
				p = o.n(v),
				h = o("./node_modules/@devvit/protos/index.js"),
				b = o("./src/reddit/models/Vote/index.ts"),
				g = e => {
					var t, o, i, d, a, r, s, n, l, c, u, m, v, p, g, f, y, A;
					return h.H.fromPartial({
						approved: e.isApproved,
						approvedAtUtc: null !== (t = e.approvedAtUTC) && void 0 !== t ? t : void 0,
						approvedBy: null !== (o = e.approvedBy) && void 0 !== o ? o : void 0,
						author: e.author,
						authorFullname: e.authorId,
						authorPremium: !!e.isAuthorPremium,
						awarders: null !== (i = e.awarders) && void 0 !== i ? i : [],
						bannedAtUtc: null !== (d = e.bannedAtUTC) && void 0 !== d ? d : void 0,
						bannedBy: e.bannedBy ? String(e.bannedBy) : void 0,
						body: null !== (a = e.bodyMD) && void 0 !== a ? a : "",
						bodyHtml: null !== (r = e.body) && void 0 !== r ? r : "",
						canGild: e.isGildable,
						collapsed: e.collapsed,
						collapsedBecauseCrowdControl: null !== (s = e.collapsedBecauseCrowdControl) && void 0 !== s && s,
						collapsedReason: null !== (n = e.collapsedReason) && void 0 !== n ? n : void 0,
						collapsedReasonCode: null !== (l = e.collapsedReasonCode) && void 0 !== l ? l : void 0,
						commentType: null !== (c = e.commentType) && void 0 !== c ? c : void 0,
						created: e.created,
						createdUtc: e.created,
						distinguished: null !== (u = e.distinguishType) && void 0 !== u ? u : void 0,
						edited: null !== e.editedAt,
						id: e.id.replace(/t[1-5]_/, ""),
						ignoreReports: e.ignoreReports,
						isSubmitter: e.isOp,
						likes: e.voteState === b.a.upvoted || e.voteState !== b.a.downvoted && void 0,
						linkId: e.postId,
						locked: e.isLocked,
						modNote: null !== (m = e.modNote) && void 0 !== m ? m : void 0,
						modReasonBy: null !== (v = e.modReasonBy) && void 0 !== v ? v : void 0,
						name: e.id,
						numReports: null !== (p = e.numReports) && void 0 !== p ? p : 0,
						parentId: null !== (g = e.parentId) && void 0 !== g ? g : void 0,
						permalink: e.permalink,
						removalReason: null !== (f = e.modRemovalReason) && void 0 !== f ? f : void 0,
						removed: e.isRemoved,
						rteMode: e.media.rteMode,
						saved: e.isSaved,
						score: e.score,
						scoreHidden: e.isScoreHidden,
						sendReplies: e.sendReplies,
						spam: e.isSpam,
						stickied: e.isStickied,
						subredditId: e.subredditId,
						linkTitle: null !== (y = e.postTitle) && void 0 !== y ? y : void 0,
						linkAuthor: null !== (A = e.postAuthor) && void 0 !== A ? A : void 0
					})
				},
				f = o("./src/reddit/models/Flair/index.ts"),
				y = o("./src/reddit/models/Media/index.ts"),
				A = e => {
					var t, o, i, d, a, r, s, n, l, c, u, m, v, p, g, A, S, x, w;
					return h.H.fromPartial({
						approved: e.isApproved,
						approvedAtUtc: null !== (t = e.approvedAtUTC) && void 0 !== t ? t : void 0,
						approvedBy: null !== (o = e.approvedBy) && void 0 !== o ? o : void 0,
						archived: e.isArchived,
						author: e.author,
						authorFlairBackgroundColor: null === (i = e.flair[0]) || void 0 === i ? void 0 : i.backgroundColor,
						authorFlairCssClass: null === (d = e.flair[0]) || void 0 === d ? void 0 : d.cssClass,
						authorFlairRichtext: (null === (a = e.flair[0]) || void 0 === a ? void 0 : a.type) === f.f.Richtext ? e.flair[0].richtext : void 0,
						authorFlairTemplateId: null === (r = e.flair[0]) || void 0 === r ? void 0 : r.templateId,
						authorFlairText: (null === (s = e.flair[0]) || void 0 === s ? void 0 : s.type) === f.f.Text ? e.flair[0].text : void 0,
						authorFlairTextColor: null === (n = e.flair[0]) || void 0 === n ? void 0 : n.textColor,
						authorFlairType: null === (l = e.flair[0]) || void 0 === l ? void 0 : l.type,
						authorFullname: e.authorId,
						authorIsBlocked: e.authorIsBlocked,
						authorPremium: e.isAuthorPremium,
						awarders: e.awarders,
						bannedAtUtc: null !== (c = e.bannedAtUTC) && void 0 !== c ? c : void 0,
						bannedBy: e.bannedBy ? String(e.bannedBy) : void 0,
						canGild: e.isGildable,
						created: e.created,
						createdUtc: e.created,
						distinguished: null !== (u = e.distinguishType) && void 0 !== u ? u : void 0,
						id: e.id.replace(/t[1-5]_/, ""),
						ignoreReports: e.ignoreReports,
						likes: e.voteState === b.a.upvoted || e.voteState !== b.a.downvoted && void 0,
						locked: e.isLocked,
						modNote: null !== (m = e.modNote) && void 0 !== m ? m : void 0,
						modReasonBy: null !== (v = e.modReasonBy) && void 0 !== v ? v : void 0,
						modReasonTitle: null !== (p = e.modRemovalReason) && void 0 !== p ? p : void 0,
						name: e.id,
						numReports: null !== (g = e.numReports) && void 0 !== g ? g : void 0,
						permalink: e.permalink,
						removalReason: null !== (A = e.modRemovalReason) && void 0 !== A ? A : void 0,
						removed: e.isRemoved,
						saved: e.saved,
						score: e.score,
						scoreHidden: e.isScoreHidden,
						sendReplies: e.sendReplies,
						spam: e.isSpam,
						stickied: e.isStickied,
						subredditId: e.belongsTo.id,
						subredditType: e.belongsTo.type,
						topAwardedType: e.topAwardedType,
						numComments: e.numComments,
						over18: e.isNSFW,
						selftext: e.media && Object(y.N)(e.media) ? e.media.markdownContent : void 0,
						selftextHtml: e.media && Object(y.N)(e.media) ? e.media.content : void 0,
						spoiler: String(e.isSpoiler),
						thumbnail: e.thumbnail.url,
						thumbnailWidth: null !== (S = e.thumbnail.width) && void 0 !== S ? S : void 0,
						thumbnailHeight: null !== (x = e.thumbnail.height) && void 0 !== x ? x : void 0,
						title: e.title,
						url: null === (w = e.source) || void 0 === w ? void 0 : w.url
					})
				},
				S = e => h.Q.fromPartial({
					freeFormReports: e.freeFormReports,
					communityIcon: e.communityIcon,
					displayName: e.name,
					title: e.title,
					over18: e.isNSFW,
					iconSize: e.icon.width && e.icon.height ? [e.icon.width, e.icon.height] : [],
					primaryColor: e.primaryColor,
					iconImg: e.icon.url,
					subscribers: e.subscribers,
					displayNamePrefixed: e.displayText,
					name: e.id,
					url: e.url,
					quarantine: e.isQuarantined,
					acceptFollowers: e.acceptFollowers,
					publicDescription: e.publicDescription,
					subredditType: e.type,
					userIsSubscriber: e.isSubscribed,
					id: e.id.replace(/t[1-5]_/, "")
				}),
				x = o("./src/devPlatform/components/UserInputModal/modals.ts"),
				w = o("./src/devPlatform/singleton/runtime.ts"),
				R = o("./src/higherOrderComponents/makeAsync.tsx"),
				C = o("./src/lib/loadWithRetries/index.ts"),
				I = o("./src/reddit/components/GlobalModalContainer/registry.ts"),
				M = o("./src/reddit/constants/modals.ts");
			const O = Object(R.a)({
					getComponent: () => Object(C.a)(() => o.e(2).then(o.bind(null, "./src/devPlatform/components/UserInputModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				P = e => () => {
					e()
				};
			Object(I.b)(M.a.DEV_PLATFORM_USER_INPUT_MODAL, e => d.a.createElement(O, {
				onOverlayClick: P(e),
				withOverlay: !0
			}));
			const k = Object(a.b)(() => Object(r.c)({}), e => ({
					showToast: (t, o) => {
						e(Object(s.f)(Object(s.e)(t, o)))
					},
					onShowUserInput: (t, o) => {
						e(Object(x.b)({
							action: t,
							onAction: o
						}))
					}
				})),
				T = (e, t) => ({
					post: e === h.h.POST ? A(t) : void 0,
					comment: e === h.h.COMMENT ? g(t) : void 0,
					subreddit: e === h.h.SUBREDDIT ? S(t) : void 0
				});
			t.default = k(e => {
				const {
					moderator: t,
					contextType: o,
					contextData: i,
					showToast: r,
					onShowUserInput: s
				} = e, v = Object(a.e)(m.a), b = Object(n.ib)(), g = Object(a.e)(e => Object(n.s)(e, {
					pageLayer: b
				}));
				let f = [];
				v && g && (w.a.init(), f = w.a.loadSubreddit(g));
				const y = (e, t) => {
						s(e, t)
					},
					A = [];
				return f.forEach(e => {
					var a;
					return null === (a = e.actions) || void 0 === a ? void 0 : a.actions.filter(((e, t) => o => {
						var i, d, a, r, s;
						if (t && !(null === (i = o.users) || void 0 === i ? void 0 : i.moderator) || !t && (null === (d = o.users) || void 0 === d ? void 0 : d.moderator)) return !1;
						switch (e) {
							case h.h.POST:
								return !!(null === (a = o.contexts) || void 0 === a ? void 0 : a.post);
							case h.h.COMMENT:
								return !!(null === (r = o.contexts) || void 0 === r ? void 0 : r.comment);
							case h.h.SUBREDDIT:
								return !!(null === (s = o.contexts) || void 0 === s ? void 0 : s.subreddit);
							default:
								return !1
						}
					})(o, t)).forEach(a => {
						const s = function(e, t, o, i, d, a) {
							return () => {
								const r = a => {
									var r, s;
									return null === (s = null === (r = w.a.getActor(e)) || void 0 === r ? void 0 : r.As(h.f)) || void 0 === s ? void 0 : s.OnAction(h.g.fromPartial({
										actionId: t.actionId,
										context: o,
										...T(o, i),
										userInput: a
									})).then(e => {
										const t = e.success ? u.b.SuccessCommunityGreen : u.b.Error;
										d(e.message, t)
									})
								};
								t.userInput ? a(t, r) : r()
							}
						}(e.actorHostname, a, o, i, r, y);
						A.push(d.a.createElement(l.b, {
							className: p.a.DropdownRow,
							displayText: a.name,
							key: `${e.actorHostname}.${a.actionId}`,
							onClick: s
						}, d.a.createElement(c.a, {
							name: t ? "mod" : "bot",
							className: p.a.Icon
						})))
					})
				}), d.a.createElement(d.a.Fragment, null, A)
			})
		},
		"./src/devPlatform/components/UserInputModal/modals.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return c
			})), o.d(t, "a", (function() {
				return u
			}));
			var i = o("./src/lib/initializeClient/installReducer.ts"),
				d = o("./src/lib/makeActionCreator/index.ts"),
				a = o("./src/reddit/actions/modal.ts"),
				r = o("./src/reddit/constants/modals.ts"),
				s = o("./src/reddit/reducers/features/devPlatform/index.ts"),
				n = o("./src/devPlatform/constants.ts");
			Object(i.a)({
				features: {
					devPlatform: s.a
				}
			});
			const l = Object(d.a)(n.e),
				c = e => {
					let {
						action: t,
						onAction: o
					} = e;
					return async e => {
						e(l({
							action: t,
							onAction: o
						})), e(Object(a.h)(r.a.DEV_PLATFORM_USER_INPUT_MODAL))
					}
				},
				u = () => async e => {
					e(Object(a.g)(r.a.DEV_PLATFORM_USER_INPUT_MODAL))
				}
		},
		"./src/devPlatform/singleton/runtime.ts": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = o("./src/config.ts"),
				d = o("./node_modules/@devvit/protos/index.js"),
				a = o("./node_modules/@devvit/runtimes/platform/browser/BrowserRuntime.js"),
				r = o("./src/devPlatform/constants.ts"),
				s = o("./node_modules/@devvit/runtimes/worker.bootstrap.cjs"),
				n = o("./node_modules/@devvit/runtimes/worker.echo.cjs"),
				l = o("./node_modules/@devvit/runtimes/worker.redditapi.cjs"),
				c = o("./node_modules/@devvit/runtimes/worker.supervisor.cjs"),
				u = o("./src/lib/localStorageAvailable/index.ts");
			const m = new Map([
				["bootstrap", s.a],
				["supervisor", c.a],
				["redditapi", l.a],
				["echo", n.a]
			]);
			class v {
				constructor(e) {
					this.hostname = e
				}
				async dispose() {}
				onBind() {}
				onUnbind() {}
				post() {}
			}
			const p = new class {
				constructor() {
					var e;
					if (this.gatewayUrl = "", this.loadedSubId = "", this.subActors = [], this.loadedMetadata = null, this.mockMetadata = null, this.sortedContextActions = [], this.localStorageAvailable = Object(u.a)(), this.runtimeInitialized = !1, this.debugLogging = !1, this.localStorageAvailable) {
						this.gatewayUrl = null !== (e = localStorage.getItem(r.b)) && void 0 !== e ? e : i.a.devPlatformGatewayUrl;
						const t = localStorage.getItem(r.c);
						t && (this.mockMetadata = JSON.parse(t)), this.debugLogging = "true" === localStorage.getItem(r.d)
					}
					this.runtime = new a.a(m, {
						logLevel: this.debugLogging ? void 0 : "off"
					})
				}
				init() {
					this.runtimeInitialized || (this.runtimeInitialized = !0, this.runtime.start())
				}
				getGatewayUrl() {
					return this.gatewayUrl
				}
				setGatewayUrl(e) {
					return this.gatewayUrl = e, this.localStorageAvailable && (e === i.a.devPlatformGatewayUrl ? localStorage.removeItem(r.b) : localStorage.setItem(r.b, e)), this.reloadSubreddit(), this.subActors.length
				}
				getDebugLogging() {
					return this.debugLogging
				}
				setDebugLogging(e) {
					this.debugLogging = e, localStorage.setItem(r.d, e ? "true" : "false")
				}
				loadMockData(e) {
					this.mockMetadata = e, this.localStorageAvailable && (e ? localStorage.setItem(r.c, JSON.stringify(e)) : localStorage.removeItem(r.c))
				}
				loadSubreddit(e) {
					if (e.id === this.loadedSubId) return this.sortedContextActions;
					if (this.loadedMetadata = null, this.debugLog(() => "Metadata not yet loaded"), void 0 !== e.devPlatformMetadata ? (this.debugLog(() => {
							var t;
							return `Loading metadata from Subreddit (${null===(t=e.devPlatformMetadata)||void 0===t?void 0:t.length} bytes)`
						}), this.loadedMetadata = d.j.fromJSON(JSON.parse(atob(e.devPlatformMetadata))), this.debugLog(() => {
							var e;
							return ["metadata.installedRemoteApps:", null === (e = this.loadedMetadata) || void 0 === e ? void 0 : e.installedRemoteApps]
						}), this.debugLog(() => {
							var e;
							return ["metadata.contextActions:", null === (e = this.loadedMetadata) || void 0 === e ? void 0 : e.contextActions]
						})) : null !== this.mockMetadata && (this.debugLog(() => "Using mock metadata"), this.loadedMetadata = this.mockMetadata), !this.loadedMetadata) return this.debugLog(() => "No metadata found"), [];
					this.unloadSubreddit(), this.loadedSubId = e.id, this.subActors = [];
					const t = this.loadedMetadata.installedRemoteApps.reduce((e, t) => (e.add(t.hostname.split(".")[0]), e), new Set);
					return this.debugLog(() => `Connecting to ${this.loadedMetadata.installedRemoteApps.length} remote actors from ${t.size} apps`), this.loadedMetadata.installedRemoteApps.forEach(e => {
						const t = e.provides.flatMap(e => {
								try {
									return [d.i.fromSerializable(e)]
								} catch {
									this.debugLog(() => `Unknown app type, skipping: ${e.fullName}`)
								}
								return []
							}),
							o = {
								hostname: e.hostname,
								provides: t
							};
						this.loadActor(o), this.subActors.push(o)
					}), this.debugLog(() => `Found ${this.loadedMetadata.contextActions.reduce((e,t)=>{var o,i;return e+(null!==(i=null===(o=t.actions)||void 0===o?void 0:o.actions.length)&&void 0!==i?i:0)},0)} actions across ${this.loadedMetadata.contextActions.length} actors`), this.sortedContextActions = this.loadedMetadata.contextActions.sort((e, t) => e.actorHostname.localeCompare(t.actorHostname)).map(e => {
						var t, o, i;
						return {
							actorHostname: e.actorHostname,
							actions: {
								actions: null !== (i = null === (o = null === (t = e.actions) || void 0 === t ? void 0 : t.actions) || void 0 === o ? void 0 : o.sort((e, t) => e.name.localeCompare(t.name))) && void 0 !== i ? i : []
							}
						}
					}), this.sortedContextActions
				}
				getActor(e) {
					return this.runtime.getActorRef(e)
				}
				unloadSubreddit() {
					this.subActors.forEach(e => {
						this.runtime.unbind(new v(e.hostname))
					})
				}
				loadActor(e) {
					const t = e.hostname.split("."),
						o = {
							"devvit-installation": d.P.fromPartial({
								values: [t[0]]
							}),
							"devvit-actor": d.P.fromPartial({
								values: [t[2]]
							})
						};
					this.runtime.bindRemoteActor(e.provides, e.hostname, this.gatewayUrl, o)
				}
				reloadSubreddit() {
					this.unloadSubreddit(), this.subActors.forEach(e => this.loadActor(e))
				}
				debugLog(e) {
					if (this.debugLogging) {
						const t = e();
						"string" == typeof t ? console.log(t) : console.log.apply(null, t)
					}
				}
			};
			t.a = p
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return a
			})), o.d(t, "a", (function() {
				return r
			}));
			const i = {},
				d = () => null;

			function a(e, t) {
				if (e in i) throw new Error(`Modal with id ${e} already registered!`);
				i[e] = t
			}

			function r(e) {
				return e && e in i ? i[e] : d
			}
		},
		"./src/reddit/reducers/features/devPlatform/index.ts": function(e, t, o) {
			"use strict";
			var i = o("./node_modules/redux/es/redux.js"),
				d = o("./src/lib/initializeClient/installReducer.ts"),
				a = o("./src/devPlatform/constants.ts");
			Object(d.a)({
				features: {
					devPlatform: l
				}
			});
			var r = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				const o = t.payload;
				switch (t.type) {
					case a.e:
						return o.action;
					default:
						return e
				}
			};
			var s = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					const o = t.payload;
					switch (t.type) {
						case a.e:
							return o.onAction;
						default:
							return e
					}
				},
				n = Object(i.c)({
					action: r,
					onAction: s
				}),
				l = t.a = Object(i.c)({
					userInputModal: n
				})
		},
		"ignored /drone/src/node_modules/cron-parser/lib fs": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/devPlatform-components-ContextActions.ec6ac883f3ac38fb968f.js.map