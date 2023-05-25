// https://www.redditstatic.com/desktop2x/devPlatform-components-ContextActions.c5a08559b28fdd46ccd9.js
// Retrieved at 5/25/2023, 11:10:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["devPlatform-components-ContextActions"], {
		"./src/devPlatform/components/ContextActions/index.tsx": function(t, e, o) {
			"use strict";
			o.r(e);
			var a = o("./node_modules/react/index.js"),
				i = o.n(a),
				d = o("./node_modules/react-redux/es/index.js"),
				n = o("./node_modules/reselect/es/index.js"),
				r = o("./src/reddit/actions/toaster.ts"),
				s = o("./src/reddit/contexts/PageLayer/index.tsx"),
				l = o("./src/reddit/controls/Dropdown/Row.tsx"),
				c = o("./src/reddit/icons/fonts/index.tsx"),
				u = o("./src/reddit/models/Toast/index.ts"),
				m = o("./src/reddit/selectors/experiments/devPlatform.ts"),
				v = o("./src/devPlatform/components/ContextActions/index.m.less"),
				h = o.n(v),
				p = o("./node_modules/@devvit/protos/index.js"),
				b = o("./src/reddit/models/Vote/index.ts"),
				g = t => {
					var e, o, a, i, d, n, r, s, l, c, u, m, v, h, g, f, y, A;
					return p.L.fromPartial({
						approved: t.isApproved,
						approvedAtUtc: null !== (e = t.approvedAtUTC) && void 0 !== e ? e : void 0,
						approvedBy: null !== (o = t.approvedBy) && void 0 !== o ? o : void 0,
						author: t.author,
						authorFullname: t.authorId,
						authorPremium: !!t.isAuthorPremium,
						awarders: null !== (a = t.awarders) && void 0 !== a ? a : [],
						bannedAtUtc: null !== (i = t.bannedAtUTC) && void 0 !== i ? i : void 0,
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
						likes: t.voteState === b.a.upvoted || t.voteState !== b.a.downvoted && void 0,
						linkId: t.postId,
						locked: t.isLocked,
						modNote: null !== (m = t.modNote) && void 0 !== m ? m : void 0,
						modReasonBy: null !== (v = t.modReasonBy) && void 0 !== v ? v : void 0,
						name: t.id,
						numReports: null !== (h = t.numReports) && void 0 !== h ? h : 0,
						parentId: null !== (g = t.parentId) && void 0 !== g ? g : void 0,
						permalink: t.permalink,
						removalReason: null !== (f = t.modRemovalReason) && void 0 !== f ? f : void 0,
						removed: t.isRemoved,
						rteMode: t.media.rteMode,
						saved: t.isSaved,
						score: t.score,
						scoreHidden: t.isScoreHidden,
						sendReplies: t.sendReplies,
						spam: t.isSpam,
						stickied: t.isStickied,
						subredditId: t.subredditId,
						linkTitle: null !== (y = t.postTitle) && void 0 !== y ? y : void 0,
						linkAuthor: null !== (A = t.postAuthor) && void 0 !== A ? A : void 0
					})
				},
				f = o("./src/reddit/models/Flair/index.ts"),
				y = o("./src/reddit/models/Media/index.ts"),
				A = t => {
					var e, o, a, i, d, n, r, s, l, c, u, m, v, h, g, A, S, O, w;
					return p.L.fromPartial({
						approved: t.isApproved,
						approvedAtUtc: null !== (e = t.approvedAtUTC) && void 0 !== e ? e : void 0,
						approvedBy: null !== (o = t.approvedBy) && void 0 !== o ? o : void 0,
						archived: t.isArchived,
						author: t.author,
						authorFlairBackgroundColor: null === (a = t.flair[0]) || void 0 === a ? void 0 : a.backgroundColor,
						authorFlairCssClass: null === (i = t.flair[0]) || void 0 === i ? void 0 : i.cssClass,
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
						likes: t.voteState === b.a.upvoted || t.voteState !== b.a.downvoted && void 0,
						locked: t.isLocked,
						modNote: null !== (m = t.modNote) && void 0 !== m ? m : void 0,
						modReasonBy: null !== (v = t.modReasonBy) && void 0 !== v ? v : void 0,
						modReasonTitle: null !== (h = t.modRemovalReason) && void 0 !== h ? h : void 0,
						name: t.id,
						numReports: null !== (g = t.numReports) && void 0 !== g ? g : void 0,
						permalink: t.permalink,
						removalReason: null !== (A = t.modRemovalReason) && void 0 !== A ? A : void 0,
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
						selftext: t.media && Object(y.N)(t.media) ? t.media.markdownContent : void 0,
						selftextHtml: t.media && Object(y.N)(t.media) ? t.media.content : void 0,
						spoiler: String(t.isSpoiler),
						thumbnail: t.thumbnail.url,
						thumbnailWidth: null !== (S = t.thumbnail.width) && void 0 !== S ? S : void 0,
						thumbnailHeight: null !== (O = t.thumbnail.height) && void 0 !== O ? O : void 0,
						title: t.title,
						url: null === (w = t.source) || void 0 === w ? void 0 : w.url
					})
				},
				S = t => p.U.fromPartial({
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
				O = o("./src/devPlatform/components/FormModal/modals.ts"),
				w = o("./src/devPlatform/components/UserInputModal/modals.ts"),
				x = o("./src/devPlatform/singleton/runtime.ts");

			function R(t, e, o, a) {
				let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
				e.forEach(e => {
					var d, n;
					switch (e.type) {
						case p.l.EFFECT_SHOW_TOAST:
							if (null === (d = e.showToast) || void 0 === d ? void 0 : d.toast) {
								const t = e.showToast.toast.appearance === p.Y.SUCCESS ? u.b.SuccessCommunityGreen : void 0;
								o(e.showToast.toast.text, t)
							}
							break;
						case p.l.EFFECT_SHOW_FORM:
							(null === (n = e.showForm) || void 0 === n ? void 0 : n.form) && a(e.showForm.form, function(t, e, o, a) {
								let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
								return async d => {
									const n = x.a.getActor(t);
									if (!n) return;
									const r = await n.As(p.Z).HandleUIEvent(p.s.fromPartial({
										event: {
											formSubmitted: {
												formId: e.id,
												results: d
											}
										},
										state: i
									}));
									R(t, r.effects, o, a, r.state)
								}
							}(t, e.showForm.form, o, a, i))
					}
				})
			}
			var M = R,
				C = o("./src/higherOrderComponents/makeAsync.tsx"),
				_ = o("./src/lib/loadWithRetries/index.ts"),
				I = o("./src/reddit/components/GlobalModalContainer/registry.ts"),
				P = o("./src/reddit/constants/modals.ts");
			const T = Object(C.a)({
					getComponent: () => Object(_.a)(() => o.e(2).then(o.bind(null, "./src/devPlatform/components/FormModal/index.tsx"))).then(t => t.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				j = t => () => {
					t()
				};
			Object(I.b)(P.a.DEV_PLATFORM_FORM_MODAL, t => i.a.createElement(T, {
				onOverlayClick: j(t),
				withOverlay: !0
			}));
			const L = Object(C.a)({
					getComponent: () => Object(_.a)(() => o.e(3).then(o.bind(null, "./src/devPlatform/components/UserInputModal/index.tsx"))).then(t => t.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				k = t => () => {
					t()
				};
			Object(I.b)(P.a.DEV_PLATFORM_USER_INPUT_MODAL, t => i.a.createElement(L, {
				onOverlayClick: k(t),
				withOverlay: !0
			}));
			const F = Object(d.b)(() => Object(n.c)({}), t => ({
					showToast: (e, o) => {
						t(Object(r.f)(Object(r.e)(e, o)))
					},
					showForm: (e, o) => {
						t(Object(O.b)({
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
				U = (t, e) => ({
					post: t === p.h.POST ? A(e) : void 0,
					comment: t === p.h.COMMENT ? g(e) : void 0,
					subreddit: t === p.h.SUBREDDIT ? S(e) : void 0
				});
			e.default = F(t => {
				const {
					moderator: e,
					contextType: o,
					contextData: a,
					onShowUserInput: n,
					showToast: r,
					showForm: v
				} = t, b = Object(d.e)(m.a), g = Object(s.ib)(), f = Object(d.e)(t => Object(s.s)(t, {
					pageLayer: g
				}));
				let y = [];
				b && f && (x.a.init(), y = x.a.loadSubreddit(f));
				const A = (t, e) => {
						n(t, e)
					},
					S = [];
				return y.forEach(t => {
					var d;
					return null === (d = t.actions) || void 0 === d ? void 0 : d.actions.filter(((t, e) => o => {
						var a, i, d, n, r;
						if (e && !(null === (a = o.users) || void 0 === a ? void 0 : a.moderator) || !e && (null === (i = o.users) || void 0 === i ? void 0 : i.moderator)) return !1;
						switch (t) {
							case p.h.POST:
								return !!(null === (d = o.contexts) || void 0 === d ? void 0 : d.post);
							case p.h.COMMENT:
								return !!(null === (n = o.contexts) || void 0 === n ? void 0 : n.comment);
							case p.h.SUBREDDIT:
								return !!(null === (r = o.contexts) || void 0 === r ? void 0 : r.subreddit);
							default:
								return !1
						}
					})(o, e)).forEach(d => {
						const n = function(t, e, o, a, i, d, n) {
							return () => {
								const r = i => {
									var r, s;
									return null === (s = null === (r = x.a.getActor(t)) || void 0 === r ? void 0 : r.As(p.f)) || void 0 === s ? void 0 : s.OnAction(p.g.fromPartial({
										actionId: e.actionId,
										context: o,
										...U(o, a),
										userInput: i
									})).then(o => {
										var i;
										if ((null === (i = o.effects) || void 0 === i ? void 0 : i.length) > 0) M(t, o.effects, d, n, {
											__contextAction: {
												actionId: e.actionId,
												thingId: a.id
											}
										});
										else if (null != o.message && null != o.success) {
											const t = o.success ? u.b.SuccessCommunityGreen : u.b.Error;
											d(o.message, t)
										}
									})
								};
								e.userInput ? i(e, r) : r()
							}
						}(t.actorHostname, d, o, a, A, r, v);
						S.push(i.a.createElement(l.b, {
							className: h.a.DropdownRow,
							displayText: d.name,
							key: `${t.actorHostname}.${d.actionId}`,
							onClick: n
						}, i.a.createElement(c.a, {
							name: e ? "mod" : "bot",
							className: h.a.Icon
						})))
					})
				}), i.a.createElement(i.a.Fragment, null, S)
			})
		},
		"./src/devPlatform/components/FormModal/modals.ts": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return c
			})), o.d(e, "b", (function() {
				return u
			}));
			var a = o("./src/lib/initializeClient/installReducer.ts"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				n = o("./src/reddit/constants/modals.ts"),
				r = o("./src/reddit/reducers/features/devPlatform/index.ts"),
				s = o("./src/devPlatform/constants.ts");
			Object(a.a)({
				features: {
					devPlatform: r.a
				}
			});
			const l = Object(i.a)(s.e),
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
			var a = o("./src/lib/initializeClient/installReducer.ts"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				n = o("./src/reddit/constants/modals.ts"),
				r = o("./src/reddit/reducers/features/devPlatform/index.ts"),
				s = o("./src/devPlatform/constants.ts");
			Object(a.a)({
				features: {
					devPlatform: r.a
				}
			});
			const l = Object(i.a)(s.f),
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
			var a = o("./src/config.ts"),
				i = o("./node_modules/@devvit/protos/index.js"),
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
						this.gatewayUrl = null !== (t = localStorage.getItem(n.b)) && void 0 !== t ? t : a.a.devPlatformGatewayUrl;
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
					return this.gatewayUrl = t, this.localStorageAvailable && (t === a.a.devPlatformGatewayUrl ? localStorage.removeItem(n.b) : localStorage.setItem(n.b, t)), this.reloadSubreddit(), this.subActors.length
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
						}), this.loadedMetadata = i.j.fromJSON(JSON.parse(atob(t.devPlatformMetadata))), this.debugLog(() => {
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
									return [i.i.fromSerializable(t)]
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
					}), this.debugLog(() => `Found ${this.loadedMetadata.contextActions.reduce((t,e)=>{var o,a;return t+(null!==(a=null===(o=e.actions)||void 0===o?void 0:o.actions.length)&&void 0!==a?a:0)},0)} actions across ${this.loadedMetadata.contextActions.length} actors`), this.sortedContextActions = this.loadedMetadata.contextActions.sort((t, e) => t.actorHostname.localeCompare(e.actorHostname)).map(t => {
						var e, o, a;
						return {
							actorHostname: t.actorHostname,
							actions: {
								actions: null !== (a = null === (o = null === (e = t.actions) || void 0 === e ? void 0 : e.actions) || void 0 === o ? void 0 : o.sort((t, e) => t.name.localeCompare(e.name))) && void 0 !== a ? a : []
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
							"devvit-installation": i.T.fromPartial({
								values: [e[0]]
							}),
							"devvit-actor": i.T.fromPartial({
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
			const a = {},
				i = () => null;

			function d(t, e) {
				if (t in a) throw new Error(`Modal with id ${t} already registered!`);
				a[t] = e
			}

			function n(t) {
				return t && t in a ? a[t] : i
			}
		},
		"./src/reddit/reducers/features/devPlatform/index.ts": function(t, e, o) {
			"use strict";
			var a = o("./node_modules/redux/es/redux.js"),
				i = o("./src/lib/initializeClient/installReducer.ts"),
				d = o("./src/devPlatform/constants.ts");
			Object(i.a)({
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
			Object(i.a)({
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
				s = Object(a.c)({
					form: n,
					onSubmit: r
				});
			Object(i.a)({
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
				u = Object(a.c)({
					action: l,
					onAction: c
				}),
				m = e.a = Object(a.c)({
					formModal: s,
					userInputModal: u
				})
		},
		"ignored /drone/src/node_modules/cron-parser/lib fs": function(t, e) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/devPlatform-components-ContextActions.c5a08559b28fdd46ccd9.js.map