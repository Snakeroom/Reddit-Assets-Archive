// https://www.redditstatic.com/desktop2x/devPlatform-components-ContextActions.ef80022f98208f55985e.js
// Retrieved at 6/15/2023, 11:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["devPlatform-components-ContextActions"], {
		"./src/devPlatform/components/ContextActions/index.tsx": function(t, e, o) {
			"use strict";
			o.r(e);
			var i = o("./node_modules/react/index.js"),
				a = o.n(i),
				d = o("./node_modules/react-redux/es/index.js"),
				n = o("./node_modules/reselect/es/index.js"),
				r = o("./src/reddit/actions/toaster.ts"),
				s = o("./src/reddit/controls/Dropdown/Row.tsx"),
				l = o("./src/reddit/icons/fonts/index.tsx"),
				c = o("./src/reddit/models/Toast/index.ts"),
				u = o("./src/reddit/selectors/experiments/devPlatform.ts"),
				m = o("./src/devPlatform/components/ContextActions/index.m.less"),
				v = o.n(m),
				h = o("./node_modules/@devvit/protos/index.js"),
				p = o("./src/reddit/models/Vote/index.ts"),
				b = t => {
					var e, o, i, a, d, n, r, s, l, c, u, m, v, b, f, g, A, y;
					return h.L.fromPartial({
						approved: t.isApproved,
						approvedAtUtc: null !== (e = t.approvedAtUTC) && void 0 !== e ? e : void 0,
						approvedBy: null !== (o = t.approvedBy) && void 0 !== o ? o : void 0,
						author: t.author,
						authorFullname: t.authorId,
						authorPremium: !!t.isAuthorPremium,
						awarders: null !== (i = t.awarders) && void 0 !== i ? i : [],
						bannedAtUtc: null !== (a = t.bannedAtUTC) && void 0 !== a ? a : void 0,
						bannedBy: t.bannedBy ? String(t.bannedBy) : void 0,
						body: null !== (d = t.bodyMD) && void 0 !== d ? d : "",
						bodyHtml: null !== (n = t.body) && void 0 !== n ? n : "",
						canGild: t.isGildable,
						collapsed: t.collapsed,
						collapsedBecauseCrowdControl: null !== (r = t.collapsedBecauseCrowdControl) && void 0 !== r && r,
						collapsedReason: null !== (s = t.collapsedReason) && void 0 !== s ? s : void 0,
						collapsedReasonCode: null !== (l = t.collapsedReasonCode) && void 0 !== l ? l : void 0,
						commentType: null !== (c = t.commentType) && void 0 !== c ? c : void 0,
						created: t.created,
						createdUtc: t.created,
						distinguished: null !== (u = t.distinguishType) && void 0 !== u ? u : void 0,
						edited: null !== t.editedAt,
						id: t.id.replace(/t[1-5]_/, ""),
						ignoreReports: t.ignoreReports,
						isSubmitter: t.isOp,
						likes: t.voteState === p.a.upvoted || t.voteState !== p.a.downvoted && void 0,
						linkId: t.postId,
						locked: t.isLocked,
						modNote: null !== (m = t.modNote) && void 0 !== m ? m : void 0,
						modReasonBy: null !== (v = t.modReasonBy) && void 0 !== v ? v : void 0,
						name: t.id,
						numReports: null !== (b = t.numReports) && void 0 !== b ? b : 0,
						parentId: null !== (f = t.parentId) && void 0 !== f ? f : void 0,
						permalink: t.permalink,
						removalReason: null !== (g = t.modRemovalReason) && void 0 !== g ? g : void 0,
						removed: t.isRemoved,
						rteMode: t.media.rteMode,
						saved: t.isSaved,
						score: t.score,
						scoreHidden: t.isScoreHidden,
						sendReplies: t.sendReplies,
						spam: t.isSpam,
						stickied: t.isStickied,
						subredditId: t.subredditId,
						linkTitle: null !== (A = t.postTitle) && void 0 !== A ? A : void 0,
						linkAuthor: null !== (y = t.postAuthor) && void 0 !== y ? y : void 0
					})
				},
				f = o("./src/reddit/models/Flair/index.ts"),
				g = o("./src/reddit/models/Media/index.ts"),
				A = t => {
					var e, o, i, a, d, n, r, s, l, c, u, m, v, b, A, y, S, w, O;
					return h.L.fromPartial({
						approved: t.isApproved,
						approvedAtUtc: null !== (e = t.approvedAtUTC) && void 0 !== e ? e : void 0,
						approvedBy: null !== (o = t.approvedBy) && void 0 !== o ? o : void 0,
						archived: t.isArchived,
						author: t.author,
						authorFlairBackgroundColor: null === (i = t.flair[0]) || void 0 === i ? void 0 : i.backgroundColor,
						authorFlairCssClass: null === (a = t.flair[0]) || void 0 === a ? void 0 : a.cssClass,
						authorFlairRichtext: (null === (d = t.flair[0]) || void 0 === d ? void 0 : d.type) === f.f.Richtext ? t.flair[0].richtext : void 0,
						authorFlairTemplateId: null === (n = t.flair[0]) || void 0 === n ? void 0 : n.templateId,
						authorFlairText: (null === (r = t.flair[0]) || void 0 === r ? void 0 : r.type) === f.f.Text ? t.flair[0].text : void 0,
						authorFlairTextColor: null === (s = t.flair[0]) || void 0 === s ? void 0 : s.textColor,
						authorFlairType: null === (l = t.flair[0]) || void 0 === l ? void 0 : l.type,
						authorFullname: t.authorId,
						authorIsBlocked: t.authorIsBlocked,
						authorPremium: t.isAuthorPremium,
						awarders: t.awarders,
						bannedAtUtc: null !== (c = t.bannedAtUTC) && void 0 !== c ? c : void 0,
						bannedBy: t.bannedBy ? String(t.bannedBy) : void 0,
						canGild: t.isGildable,
						created: t.created,
						createdUtc: t.created,
						distinguished: null !== (u = t.distinguishType) && void 0 !== u ? u : void 0,
						id: t.id.replace(/t[1-5]_/, ""),
						ignoreReports: t.ignoreReports,
						likes: t.voteState === p.a.upvoted || t.voteState !== p.a.downvoted && void 0,
						locked: t.isLocked,
						modNote: null !== (m = t.modNote) && void 0 !== m ? m : void 0,
						modReasonBy: null !== (v = t.modReasonBy) && void 0 !== v ? v : void 0,
						modReasonTitle: null !== (b = t.modRemovalReason) && void 0 !== b ? b : void 0,
						name: t.id,
						numReports: null !== (A = t.numReports) && void 0 !== A ? A : void 0,
						permalink: t.permalink,
						removalReason: null !== (y = t.modRemovalReason) && void 0 !== y ? y : void 0,
						removed: t.isRemoved,
						saved: t.saved,
						score: t.score,
						scoreHidden: t.isScoreHidden,
						sendReplies: t.sendReplies,
						spam: t.isSpam,
						stickied: t.isStickied,
						subredditId: t.belongsTo.id,
						subredditType: t.belongsTo.type,
						topAwardedType: t.topAwardedType,
						numComments: t.numComments,
						over18: t.isNSFW,
						selftext: t.media && Object(g.N)(t.media) ? t.media.markdownContent : void 0,
						selftextHtml: t.media && Object(g.N)(t.media) ? t.media.content : void 0,
						spoiler: String(t.isSpoiler),
						thumbnail: t.thumbnail.url,
						thumbnailWidth: null !== (S = t.thumbnail.width) && void 0 !== S ? S : void 0,
						thumbnailHeight: null !== (w = t.thumbnail.height) && void 0 !== w ? w : void 0,
						title: t.title,
						url: null === (O = t.source) || void 0 === O ? void 0 : O.url
					})
				},
				y = t => h.U.fromPartial({
					freeFormReports: t.freeFormReports,
					communityIcon: t.communityIcon,
					displayName: t.name,
					title: t.title,
					over18: t.isNSFW,
					iconSize: t.icon.width && t.icon.height ? [t.icon.width, t.icon.height] : [],
					primaryColor: t.primaryColor,
					iconImg: t.icon.url,
					subscribers: t.subscribers,
					displayNamePrefixed: t.displayText,
					name: t.id,
					url: t.url,
					quarantine: t.isQuarantined,
					acceptFollowers: t.acceptFollowers,
					publicDescription: t.publicDescription,
					subredditType: t.type,
					userIsSubscriber: t.isSubscribed,
					id: t.id.replace(/t[1-5]_/, "")
				}),
				S = o("./src/devPlatform/components/FormModal/modals.ts"),
				w = o("./src/devPlatform/components/UserInputModal/modals.ts"),
				O = o("./src/devPlatform/singleton/runtime.ts");

			function x(t, e, o, i) {
				let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
				e.forEach(e => {
					var d, n;
					switch (e.type) {
						case h.l.EFFECT_SHOW_TOAST:
							if (null === (d = e.showToast) || void 0 === d ? void 0 : d.toast) {
								const t = e.showToast.toast.appearance === h.Y.SUCCESS ? c.b.SuccessCommunityGreen : void 0;
								o(e.showToast.toast.text, t)
							}
							break;
						case h.l.EFFECT_SHOW_FORM:
							(null === (n = e.showForm) || void 0 === n ? void 0 : n.form) && i(e.showForm.form, function(t, e, o, i) {
								let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
								return async d => {
									const n = O.a.getActor(t);
									if (!n) return;
									const r = await n.As(h.Z).HandleUIEvent(h.s.fromPartial({
										event: {
											formSubmitted: {
												formId: e.id,
												results: d
											}
										},
										state: a
									}));
									x(t, r.effects, o, i, r.state)
								}
							}(t, e.showForm.form, o, i, a))
					}
				})
			}
			var R = x,
				M = o("./src/higherOrderComponents/makeAsync.tsx"),
				C = o("./src/lib/loadWithRetries/index.ts"),
				_ = o("./src/reddit/components/GlobalModalContainer/registry.ts"),
				I = o("./src/reddit/constants/modals.ts");
			const P = Object(M.a)({
					getComponent: () => Object(C.a)(() => o.e(2).then(o.bind(null, "./src/devPlatform/components/FormModal/index.tsx"))).then(t => t.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				T = t => () => {
					t()
				};
			Object(_.b)(I.a.DEV_PLATFORM_FORM_MODAL, t => a.a.createElement(P, {
				onOverlayClick: T(t),
				withOverlay: !0
			}));
			const j = Object(M.a)({
					getComponent: () => Object(C.a)(() => o.e(3).then(o.bind(null, "./src/devPlatform/components/UserInputModal/index.tsx"))).then(t => t.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				L = t => () => {
					t()
				};
			Object(_.b)(I.a.DEV_PLATFORM_USER_INPUT_MODAL, t => a.a.createElement(j, {
				onOverlayClick: L(t),
				withOverlay: !0
			}));
			const k = Object(d.b)(() => Object(n.c)({}), t => ({
					showToast: (e, o) => {
						t(Object(r.f)(Object(r.e)(e, o)))
					},
					showForm: (e, o) => {
						t(Object(S.b)({
							form: e,
							onSubmit: o
						}))
					},
					onShowUserInput: (e, o) => {
						t(Object(w.b)({
							action: e,
							onAction: o
						}))
					}
				})),
				F = (t, e) => ({
					post: t === h.h.POST ? A(e) : void 0,
					comment: t === h.h.COMMENT ? b(e) : void 0,
					subreddit: t === h.h.SUBREDDIT ? y(e) : void 0
				});
			e.default = k(t => {
				const {
					moderator: e,
					contextType: o,
					contextData: i,
					onShowUserInput: n,
					subreddit: r,
					showToast: m,
					showForm: p
				} = t;
				if (!Object(d.e)(u.a)) return null;
				if (null == r) return null;
				let b = [];
				O.a.init(), b = O.a.loadSubreddit(r);
				const f = (t, e) => {
						n(t, e)
					},
					g = [];
				return b.forEach(d => {
					var n;
					return null === (n = d.actions) || void 0 === n ? void 0 : n.actions.filter(((t, e) => o => {
						var i, a, d, n, r;
						if (e && !(null === (i = o.users) || void 0 === i ? void 0 : i.moderator) || !e && (null === (a = o.users) || void 0 === a ? void 0 : a.moderator)) return !1;
						switch (t) {
							case h.h.POST:
								return !!(null === (d = o.contexts) || void 0 === d ? void 0 : d.post);
							case h.h.COMMENT:
								return !!(null === (n = o.contexts) || void 0 === n ? void 0 : n.comment);
							case h.h.SUBREDDIT:
								return !!(null === (r = o.contexts) || void 0 === r ? void 0 : r.subreddit);
							default:
								return !1
						}
					})(o, !!e)).forEach(n => {
						const r = function(t, e, o, i, a, d, n) {
							return () => {
								const r = a => {
									var r, s;
									return null === (s = null === (r = O.a.getActor(t)) || void 0 === r ? void 0 : r.As(h.f)) || void 0 === s ? void 0 : s.OnAction(h.g.fromPartial({
										actionId: e.actionId,
										context: o,
										...F(o, i),
										userInput: a
									})).then(o => {
										var a;
										if ((null === (a = o.effects) || void 0 === a ? void 0 : a.length) > 0) R(t, o.effects, d, n, {
											__contextAction: {
												actionId: e.actionId,
												thingId: i.id
											}
										});
										else if (null != o.message && o.message.length > 0 && null != o.success) {
											const t = o.success ? c.b.SuccessCommunityGreen : c.b.Error;
											d(o.message, t)
										}
									})
								};
								e.userInput ? a(e, r) : r()
							}
						}(d.actorHostname, n, o, i, f, m, p);
						g.push(a.a.createElement(s.b, {
							className: t.isOnModQueueOverflowMenu ? v.a.DropdownRowBorderless : v.a.Dropdown,
							displayText: n.name,
							key: `${d.actorHostname}.${n.actionId}`,
							onClick: r
						}, a.a.createElement(l.a, {
							name: e ? "mod" : "bot",
							className: v.a.Icon
						})))
					})
				}), a.a.createElement(a.a.Fragment, null, g)
			})
		},
		"./src/devPlatform/components/FormModal/modals.ts": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return c
			})), o.d(e, "b", (function() {
				return u
			}));
			var i = o("./src/lib/initializeClient/installReducer.ts"),
				a = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				n = o("./src/reddit/constants/modals.ts"),
				r = o("./src/reddit/reducers/features/devPlatform/index.ts"),
				s = o("./src/devPlatform/constants.ts");
			Object(i.a)({
				features: {
					devPlatform: r.a
				}
			});
			const l = Object(a.a)(s.e),
				c = () => async t => {
					t(Object(d.g)(n.a.DEV_PLATFORM_FORM_MODAL))
				}, u = t => {
					let {
						form: e,
						onSubmit: o
					} = t;
					return async t => {
						t(l({
							form: e,
							onSubmit: o
						})), t(Object(d.h)(n.a.DEV_PLATFORM_FORM_MODAL))
					}
				}
		},
		"./src/devPlatform/components/UserInputModal/modals.ts": function(t, e, o) {
			"use strict";
			o.d(e, "b", (function() {
				return c
			})), o.d(e, "a", (function() {
				return u
			}));
			var i = o("./src/lib/initializeClient/installReducer.ts"),
				a = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				n = o("./src/reddit/constants/modals.ts"),
				r = o("./src/reddit/reducers/features/devPlatform/index.ts"),
				s = o("./src/devPlatform/constants.ts");
			Object(i.a)({
				features: {
					devPlatform: r.a
				}
			});
			const l = Object(a.a)(s.f),
				c = t => {
					let {
						action: e,
						onAction: o
					} = t;
					return async t => {
						t(l({
							action: e,
							onAction: o
						})), t(Object(d.h)(n.a.DEV_PLATFORM_USER_INPUT_MODAL))
					}
				},
				u = () => async t => {
					t(Object(d.g)(n.a.DEV_PLATFORM_USER_INPUT_MODAL))
				}
		},
		"./src/devPlatform/singleton/runtime.ts": function(t, e, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = o("./src/config.ts"),
				a = o("./node_modules/@devvit/protos/index.js"),
				d = o("./node_modules/@devvit/runtimes/platform/browser/BrowserRuntime.js"),
				n = o("./src/devPlatform/constants.ts"),
				r = o("./node_modules/@devvit/runtimes/worker.bootstrap.cjs"),
				s = o("./node_modules/@devvit/runtimes/worker.echo.cjs"),
				l = o("./node_modules/@devvit/runtimes/worker.redditapi.cjs"),
				c = o("./node_modules/@devvit/runtimes/worker.supervisor.cjs"),
				u = o("./src/lib/localStorageAvailable/index.ts");
			const m = new Map([
				["bootstrap", r.a],
				["supervisor", c.a],
				["redditapi", l.a],
				["echo", s.a]
			]);
			class v {
				constructor(t) {
					this.hostname = t
				}
				async dispose() {}
				onBind() {}
				onUnbind() {}
				post() {}
			}
			const h = new class {
				constructor() {
					var t;
					if (this.gatewayUrl = "", this.loadedSubId = "", this.subActors = [], this.loadedMetadata = null, this.mockMetadata = null, this.sortedContextActions = [], this.localStorageAvailable = Object(u.a)(), this.runtimeInitialized = !1, this.debugLogging = !1, this.localStorageAvailable) {
						this.gatewayUrl = null !== (t = localStorage.getItem(n.b)) && void 0 !== t ? t : i.a.devPlatformGatewayUrl;
						const e = localStorage.getItem(n.c);
						e && (this.mockMetadata = JSON.parse(e)), this.debugLogging = "true" === localStorage.getItem(n.d)
					}
					this.runtime = new d.a(m, {
						logLevel: this.debugLogging ? void 0 : "off"
					})
				}
				init() {
					this.runtimeInitialized || (this.runtimeInitialized = !0, this.runtime.start())
				}
				getGatewayUrl() {
					return this.gatewayUrl
				}
				setGatewayUrl(t) {
					return this.gatewayUrl = t, this.localStorageAvailable && (t === i.a.devPlatformGatewayUrl ? localStorage.removeItem(n.b) : localStorage.setItem(n.b, t)), this.reloadSubreddit(), this.subActors.length
				}
				getDebugLogging() {
					return this.debugLogging
				}
				setDebugLogging(t) {
					this.debugLogging = t, localStorage.setItem(n.d, t ? "true" : "false")
				}
				loadMockData(t) {
					this.mockMetadata = t, this.localStorageAvailable && (t ? localStorage.setItem(n.c, JSON.stringify(t)) : localStorage.removeItem(n.c))
				}
				loadSubreddit(t) {
					if (t.id === this.loadedSubId) return this.sortedContextActions;
					if (this.loadedMetadata = null, this.debugLog(() => "Metadata not yet loaded"), void 0 !== t.devPlatformMetadata ? (this.debugLog(() => {
							var e;
							return `Loading metadata from Subreddit (${null===(e=t.devPlatformMetadata)||void 0===e?void 0:e.length} bytes)`
						}), this.loadedMetadata = a.j.fromJSON(JSON.parse(atob(t.devPlatformMetadata))), this.debugLog(() => {
							var t;
							return ["metadata.installedRemoteApps:", null === (t = this.loadedMetadata) || void 0 === t ? void 0 : t.installedRemoteApps]
						}), this.debugLog(() => {
							var t;
							return ["metadata.contextActions:", null === (t = this.loadedMetadata) || void 0 === t ? void 0 : t.contextActions]
						})) : null !== this.mockMetadata && (this.debugLog(() => "Using mock metadata"), this.loadedMetadata = this.mockMetadata), !this.loadedMetadata) return this.debugLog(() => "No metadata found"), [];
					this.unloadSubreddit(), this.loadedSubId = t.id, this.subActors = [];
					const e = this.loadedMetadata.installedRemoteApps.reduce((t, e) => (t.add(e.hostname.split(".")[0]), t), new Set);
					return this.debugLog(() => `Connecting to ${this.loadedMetadata.installedRemoteApps.length} remote actors from ${e.size} apps`), this.loadedMetadata.installedRemoteApps.forEach(t => {
						const e = t.provides.flatMap(t => {
								try {
									return [a.i.fromSerializable(t)]
								} catch {
									this.debugLog(() => `Unknown app type, skipping: ${t.fullName}`)
								}
								return []
							}),
							o = {
								hostname: t.hostname,
								provides: e
							};
						this.loadActor(o), this.subActors.push(o)
					}), this.debugLog(() => `Found ${this.loadedMetadata.contextActions.reduce((t,e)=>{var o,i;return t+(null!==(i=null===(o=e.actions)||void 0===o?void 0:o.actions.length)&&void 0!==i?i:0)},0)} actions across ${this.loadedMetadata.contextActions.length} actors`), this.sortedContextActions = this.loadedMetadata.contextActions.sort((t, e) => t.actorHostname.localeCompare(e.actorHostname)).map(t => {
						var e, o, i;
						return {
							actorHostname: t.actorHostname,
							actions: {
								actions: null !== (i = null === (o = null === (e = t.actions) || void 0 === e ? void 0 : e.actions) || void 0 === o ? void 0 : o.sort((t, e) => t.name.localeCompare(e.name))) && void 0 !== i ? i : []
							}
						}
					}), this.sortedContextActions
				}
				getActor(t) {
					return this.runtime.getActorRef(t)
				}
				unloadSubreddit() {
					this.subActors.forEach(t => {
						this.runtime.unbind(new v(t.hostname))
					})
				}
				loadActor(t) {
					const e = t.hostname.split("."),
						o = {
							"devvit-installation": a.T.fromPartial({
								values: [e[0]]
							}),
							"devvit-actor": a.T.fromPartial({
								values: [e[2]]
							})
						};
					this.runtime.bindRemoteActor(t.provides, t.hostname, this.gatewayUrl, o)
				}
				reloadSubreddit() {
					this.unloadSubreddit(), this.subActors.forEach(t => this.loadActor(t))
				}
				debugLog(t) {
					if (this.debugLogging) {
						const e = t();
						"string" == typeof e ? console.log(e) : console.log.apply(null, e)
					}
				}
			};
			e.a = h
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(t, e, o) {
			"use strict";
			o.d(e, "b", (function() {
				return d
			})), o.d(e, "a", (function() {
				return n
			}));
			const i = {},
				a = () => null;

			function d(t, e) {
				if (t in i) throw new Error(`Modal with id ${t} already registered!`);
				i[t] = e
			}

			function n(t) {
				return t && t in i ? i[t] : a
			}
		},
		"./src/reddit/reducers/features/devPlatform/index.ts": function(t, e, o) {
			"use strict";
			var i = o("./node_modules/redux/es/redux.js"),
				a = o("./src/lib/initializeClient/installReducer.ts"),
				d = o("./src/devPlatform/constants.ts");
			Object(a.a)({
				features: {
					devPlatform: m
				}
			});
			var n = function() {
				let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					e = arguments.length > 1 ? arguments[1] : void 0;
				const o = e.payload;
				return e.type === d.e ? o.form : t
			};
			Object(a.a)({
				features: {
					devPlatform: m
				}
			});
			var r = function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						e = arguments.length > 1 ? arguments[1] : void 0;
					const o = e.payload;
					return e.type === d.e ? o.onSubmit : t
				},
				s = Object(i.c)({
					form: n,
					onSubmit: r
				});
			Object(a.a)({
				features: {
					devPlatform: m
				}
			});
			var l = function() {
				let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					e = arguments.length > 1 ? arguments[1] : void 0;
				const o = e.payload;
				switch (e.type) {
					case d.f:
						return o.action;
					default:
						return t
				}
			};
			var c = function() {
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						e = arguments.length > 1 ? arguments[1] : void 0;
					const o = e.payload;
					switch (e.type) {
						case d.f:
							return o.onAction;
						default:
							return t
					}
				},
				u = Object(i.c)({
					action: l,
					onAction: c
				}),
				m = e.a = Object(i.c)({
					formModal: s,
					userInputModal: u
				})
		},
		"ignored /drone/src/node_modules/cron-parser/lib fs": function(t, e) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/devPlatform-components-ContextActions.ef80022f98208f55985e.js.map