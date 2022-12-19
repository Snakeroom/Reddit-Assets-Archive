// https://www.redditstatic.com/desktop2x/devPlatform-components-ContextActions.79e41e08cbfbd4751547.js
// Retrieved at 12/19/2022, 4:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["devPlatform-components-ContextActions"], {
		"./src/devPlatform/components/ContextActions/index.m.less": function(e, t, o) {},
		"./src/devPlatform/components/ContextActions/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/react/index.js"),
				i = o.n(n),
				d = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				s = o("./src/reddit/actions/toaster.ts"),
				r = o("./src/reddit/components/OverflowMenu/index.tsx"),
				l = o("./src/reddit/contexts/PageLayer/index.tsx"),
				c = o("./src/reddit/icons/fonts/index.tsx"),
				u = o("./src/reddit/models/Toast/index.ts"),
				m = o("./src/reddit/selectors/experiments/devPlatform.ts"),
				p = o("./src/devPlatform/components/ContextActions/index.m.less"),
				v = o.n(p),
				h = o("./node_modules/@devvit/protos/index.js"),
				b = o("./src/reddit/models/Vote/index.ts"),
				g = e => {
					var t, o, n, i, d, a, s, r, l, c, u, m, p, v, g, f, w, x;
					return h.F.fromPartial({
						approved: e.isApproved,
						approvedAtUtc: null !== (t = e.approvedAtUTC) && void 0 !== t ? t : void 0,
						approvedBy: null !== (o = e.approvedBy) && void 0 !== o ? o : void 0,
						author: e.author,
						authorFullname: e.authorId,
						authorPremium: !!e.isAuthorPremium,
						awarders: null !== (n = e.awarders) && void 0 !== n ? n : [],
						bannedAtUtc: null !== (i = e.bannedAtUTC) && void 0 !== i ? i : void 0,
						bannedBy: e.bannedBy ? String(e.bannedBy) : void 0,
						body: null !== (d = e.bodyMD) && void 0 !== d ? d : "",
						bodyHtml: null !== (a = e.body) && void 0 !== a ? a : "",
						canGild: e.isGildable,
						collapsed: e.collapsed,
						collapsedBecauseCrowdControl: null !== (s = e.collapsedBecauseCrowdControl) && void 0 !== s && s,
						collapsedReason: null !== (r = e.collapsedReason) && void 0 !== r ? r : void 0,
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
						modReasonBy: null !== (p = e.modReasonBy) && void 0 !== p ? p : void 0,
						name: e.id,
						numReports: null !== (v = e.numReports) && void 0 !== v ? v : 0,
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
						linkTitle: null !== (w = e.postTitle) && void 0 !== w ? w : void 0,
						linkAuthor: null !== (x = e.postAuthor) && void 0 !== x ? x : void 0
					})
				},
				f = o("./src/reddit/models/Flair/index.ts"),
				w = o("./src/reddit/models/Media/index.ts"),
				x = e => {
					var t, o, n, i, d, a, s, r, l, c, u, m, p, v, g, x, A, O, y;
					return h.F.fromPartial({
						approved: e.isApproved,
						approvedAtUtc: null !== (t = e.approvedAtUTC) && void 0 !== t ? t : void 0,
						approvedBy: null !== (o = e.approvedBy) && void 0 !== o ? o : void 0,
						archived: e.isArchived,
						author: e.author,
						authorFlairBackgroundColor: null === (n = e.flair[0]) || void 0 === n ? void 0 : n.backgroundColor,
						authorFlairCssClass: null === (i = e.flair[0]) || void 0 === i ? void 0 : i.cssClass,
						authorFlairRichtext: (null === (d = e.flair[0]) || void 0 === d ? void 0 : d.type) === f.f.Richtext ? e.flair[0].richtext : void 0,
						authorFlairTemplateId: null === (a = e.flair[0]) || void 0 === a ? void 0 : a.templateId,
						authorFlairText: (null === (s = e.flair[0]) || void 0 === s ? void 0 : s.type) === f.f.Text ? e.flair[0].text : void 0,
						authorFlairTextColor: null === (r = e.flair[0]) || void 0 === r ? void 0 : r.textColor,
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
						modReasonBy: null !== (p = e.modReasonBy) && void 0 !== p ? p : void 0,
						modReasonTitle: null !== (v = e.modRemovalReason) && void 0 !== v ? v : void 0,
						name: e.id,
						numReports: null !== (g = e.numReports) && void 0 !== g ? g : void 0,
						permalink: e.permalink,
						removalReason: null !== (x = e.modRemovalReason) && void 0 !== x ? x : void 0,
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
						selftext: e.media && Object(w.N)(e.media) ? e.media.markdownContent : void 0,
						selftextHtml: e.media && Object(w.N)(e.media) ? e.media.content : void 0,
						spoiler: String(e.isSpoiler),
						thumbnail: e.thumbnail.url,
						thumbnailWidth: null !== (A = e.thumbnail.width) && void 0 !== A ? A : void 0,
						thumbnailHeight: null !== (O = e.thumbnail.height) && void 0 !== O ? O : void 0,
						title: e.title,
						url: null === (y = e.source) || void 0 === y ? void 0 : y.url
					})
				},
				A = e => h.O.fromPartial({
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
				O = o("./src/devPlatform/components/UserInputModal/modals.ts"),
				y = o("./src/devPlatform/singleton/runtime.ts"),
				S = o("./src/higherOrderComponents/makeAsync.tsx"),
				_ = o("./src/lib/loadWithRetries/index.ts"),
				I = o("./src/reddit/components/GlobalModalContainer/registry.ts"),
				C = o("./src/reddit/constants/modals.ts");
			const R = Object(S.a)({
					getComponent: () => Object(_.a)(() => o.e(2).then(o.bind(null, "./src/devPlatform/components/UserInputModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				T = e => () => {
					e()
				};
			Object(I.b)(C.a.DEV_PLATFORM_USER_INPUT_MODAL, e => i.a.createElement(R, {
				onOverlayClick: T(e),
				withOverlay: !0
			}));
			const M = Object(d.b)(() => Object(a.c)({}), e => ({
					showToast: (t, o) => {
						e(Object(s.f)(Object(s.e)(t, o)))
					},
					onShowUserInput: (t, o) => {
						e(Object(O.b)({
							action: t,
							onAction: o
						}))
					}
				})),
				P = (e, t) => ({
					post: e === h.g.POST ? x(t) : void 0,
					comment: e === h.g.COMMENT ? g(t) : void 0,
					subreddit: e === h.g.SUBREDDIT ? A(t) : void 0
				});
			t.default = M(e => {
				const {
					moderator: t,
					contextType: o,
					contextData: n,
					showToast: a,
					onShowUserInput: s
				} = e, p = Object(d.e)(m.a), b = Object(l.gb)(), g = Object(d.e)(e => Object(l.s)(e, {
					pageLayer: b
				}));
				let f = [];
				p && g && (y.a.init(), f = y.a.loadSubreddit(g));
				const w = (e, t) => {
						s(e, t)
					},
					x = [];
				return f.forEach(e => {
					var d;
					return null === (d = e.actions) || void 0 === d ? void 0 : d.actions.filter(((e, t) => o => {
						var n, i, d, a, s;
						if (t && !(null === (n = o.users) || void 0 === n ? void 0 : n.moderator) || !t && (null === (i = o.users) || void 0 === i ? void 0 : i.moderator)) return !1;
						switch (e) {
							case h.g.POST:
								return !!(null === (d = o.contexts) || void 0 === d ? void 0 : d.post);
							case h.g.COMMENT:
								return !!(null === (a = o.contexts) || void 0 === a ? void 0 : a.comment);
							case h.g.SUBREDDIT:
								return !!(null === (s = o.contexts) || void 0 === s ? void 0 : s.subreddit);
							default:
								return !1
						}
					})(o, t)).forEach(t => {
						const d = function(e, t, o, n, i, d) {
							return () => {
								const a = d => {
									var a, s;
									return null === (s = null === (a = y.a.getActor(e)) || void 0 === a ? void 0 : a.As(h.e)) || void 0 === s ? void 0 : s.OnAction(h.f.fromPartial({
										actionId: t.actionId,
										context: o,
										...P(o, n),
										userInput: d
									})).then(e => {
										const t = e.success ? u.b.SuccessCommunityGreen : u.b.Error;
										i(e.message, t)
									})
								};
								t.userInput ? d(t, a) : a()
							}
						}(e.actorHostname, t, o, n, a, w);
						x.push(i.a.createElement(r.a, {
							displayText: t.name,
							key: `${e.actorHostname}.${t.actionId}`,
							onClick: d
						}, i.a.createElement(c.a, {
							name: "bot",
							className: v.a.icon
						})))
					})
				}), i.a.createElement(i.a.Fragment, null, x)
			})
		},
		"./src/devPlatform/components/UserInputModal/modals.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return c
			})), o.d(t, "a", (function() {
				return u
			}));
			var n = o("./src/lib/initializeClient/installReducer.ts"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				a = o("./src/reddit/constants/modals.ts"),
				s = o("./src/reddit/reducers/features/devPlatform/index.ts"),
				r = o("./src/devPlatform/constants.ts");
			Object(n.a)({
				features: {
					devPlatform: s.a
				}
			});
			const l = Object(i.a)(r.e),
				c = e => {
					let {
						action: t,
						onAction: o
					} = e;
					return async e => {
						e(l({
							action: t,
							onAction: o
						})), e(Object(d.h)(a.a.DEV_PLATFORM_USER_INPUT_MODAL))
					}
				},
				u = () => async e => {
					e(Object(d.g)(a.a.DEV_PLATFORM_USER_INPUT_MODAL))
				}
		},
		"./src/devPlatform/singleton/runtime.ts": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/config.ts"),
				i = o("./node_modules/@devvit/protos/index.js"),
				d = o("./node_modules/@devvit/runtimes/platform/browser/BrowserRuntime.js"),
				a = o("./src/devPlatform/constants.ts"),
				s = o("./node_modules/@devvit/runtimes/worker.bootstrap.cjs"),
				r = o("./node_modules/@devvit/runtimes/worker.echo.cjs"),
				l = o("./node_modules/@devvit/runtimes/worker.redditapi.cjs"),
				c = o("./node_modules/@devvit/runtimes/worker.supervisor.cjs"),
				u = o("./src/lib/localStorageAvailable/index.ts");
			const m = new Map([
				["bootstrap", s.a],
				["supervisor", c.a],
				["redditapi", l.a],
				["echo", r.a]
			]);
			class p {
				constructor(e) {
					this.hostname = e
				}
				async dispose() {}
				onBind() {}
				onUnbind() {}
				post() {}
			}
			const v = new class {
				constructor() {
					var e;
					if (this.runtime = new d.a(m), this.gatewayUrl = "", this.loadedSubId = "", this.subActors = [], this.loadedMetadata = null, this.mockMetadata = null, this.sortedContextActions = [], this.localStorageAvailable = Object(u.a)(), this.runtimeInitialized = !1, this.debugLogging = !1, this.localStorageAvailable) {
						this.gatewayUrl = null !== (e = localStorage.getItem(a.b)) && void 0 !== e ? e : n.a.devPlatformGatewayUrl;
						const t = localStorage.getItem(a.c);
						t && (this.mockMetadata = JSON.parse(t)), this.debugLogging = "true" === localStorage.getItem(a.d)
					}
				}
				init() {
					this.runtimeInitialized || (this.runtimeInitialized = !0, this.runtime.start())
				}
				getGatewayUrl() {
					return this.gatewayUrl
				}
				setGatewayUrl(e) {
					return this.gatewayUrl = e, this.localStorageAvailable && (e === n.a.devPlatformGatewayUrl ? localStorage.removeItem(a.b) : localStorage.setItem(a.b, e)), this.reloadSubreddit(), this.subActors.length
				}
				getDebugLogging() {
					return this.debugLogging
				}
				setDebugLogging(e) {
					this.debugLogging = e, localStorage.setItem(a.d, e ? "true" : "false")
				}
				loadMockData(e) {
					this.mockMetadata = e, this.localStorageAvailable && (e ? localStorage.setItem(a.c, JSON.stringify(e)) : localStorage.removeItem(a.c))
				}
				loadSubreddit(e) {
					if (e.id === this.loadedSubId) return this.sortedContextActions;
					if (this.loadedMetadata = null, this.debugLog(() => "Metadata not yet loaded"), void 0 !== e.devPlatformMetadata ? (this.debugLog(() => {
							var t;
							return `Loading metadata from Subreddit (${null===(t=e.devPlatformMetadata)||void 0===t?void 0:t.length} bytes)`
						}), this.loadedMetadata = i.i.fromJSON(JSON.parse(atob(e.devPlatformMetadata))), this.debugLog(() => {
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
									return [i.h.fromSerializable(e)]
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
					}), this.debugLog(() => `Found ${this.loadedMetadata.contextActions.reduce((e,t)=>{var o,n;return e+(null!==(n=null===(o=t.actions)||void 0===o?void 0:o.actions.length)&&void 0!==n?n:0)},0)} actions across ${this.loadedMetadata.contextActions.length} actors`), this.sortedContextActions = this.loadedMetadata.contextActions.sort((e, t) => e.actorHostname.localeCompare(t.actorHostname)).map(e => {
						var t, o, n;
						return {
							actorHostname: e.actorHostname,
							actions: {
								actions: null !== (n = null === (o = null === (t = e.actions) || void 0 === t ? void 0 : t.actions) || void 0 === o ? void 0 : o.sort((e, t) => e.name.localeCompare(t.name))) && void 0 !== n ? n : []
							}
						}
					}), this.sortedContextActions
				}
				getActor(e) {
					return this.runtime.getActorRef(e)
				}
				unloadSubreddit() {
					this.subActors.forEach(e => {
						this.runtime.unbind(new p(e.hostname))
					})
				}
				loadActor(e) {
					const t = e.hostname.split("."),
						o = {
							"devvit-installation": i.N.fromPartial({
								values: [t[0]]
							}),
							"devvit-actor": i.N.fromPartial({
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
			t.a = v
		},
		"./src/higherOrderComponents/withAdClickLocation/Locations.ts": function(e, t, o) {
			"use strict";
			var n, i;
			o.d(t, "a", (function() {
					return n
				})), o.d(t, "b", (function() {
					return i
				})),
				function(e) {
					e.UNKNOWN = "unknown", e.TITLE = "title", e.TOP_BAR = "top_bar", e.MEDIA = "media", e.BODY = "body", e.BACKGROUND = "background", e.CTA_URL = "cta_url", e.CTA_BUTTON = "cta_button", e.CTA_WHITESPACE = "cta_whitespace", e.CTA_CAPTION = "cta_caption", e.SUBREDDIT = "subreddit", e.TIMESTAMP = "timestamp", e.USER = "user"
				}(n || (n = {})),
				function(e) {
					e.COMMENTS = "comments", e.FLATLIST_SHARE = "fl_share", e.FLATLIST_AWARD = "fl_award", e.FLATLIST_SAVE = "fl_save", e.FLATLIST_GENERAL = "fl_unknown", e.OVERFLOW_MENU = "overflow_menu", e.UPVOTE = "upvote", e.DOWNVOTE = "downvote"
				}(i || (i = {}))
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return d
			})), o.d(t, "a", (function() {
				return a
			}));
			const n = {},
				i = () => null;

			function d(e, t) {
				if (e in n) throw new Error(`Modal with id ${e} already registered!`);
				n[e] = t
			}

			function a(e) {
				return e && e in n ? n[e] : i
			}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, o) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return O
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				i = o("./node_modules/react/index.js"),
				d = o.n(i),
				a = o("./node_modules/react-redux/es/index.js"),
				s = o("./node_modules/reselect/es/index.js"),
				r = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = o("./src/reddit/controls/Dropdown/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/Row.tsx"),
				v = o("./src/reddit/icons/fonts/index.tsx"),
				h = o("./src/reddit/selectors/tooltip.ts"),
				b = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = o("./src/reddit/components/OverflowMenu/index.m.less"),
				f = o.n(g);
			const w = l.a.wrapped(m.a, "_Dropdown", f.a),
				x = Object(u.a)(w),
				A = l.a.button("MenuButton", f.a),
				O = l.a.wrapped(p.b, "DropdownRow", f.a),
				y = Object(s.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: o
						} = t;
						return Object(h.b)(o)(e)
					}
				}),
				S = Object(a.b)(y, (e, t) => {
					let {
						dropdownId: o
					} = t;
					return {
						toggleDropdown: () => e(Object(c.h)({
							tooltipId: o
						}))
					}
				}),
				_ = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = S(e => d.a.createElement(A, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(r.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: _(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": b.b.OVERFLOW_MENU
			}, e.icon ? e.icon : d.a.createElement(v.a, {
				name: "overflow_horizontal",
				className: f.a.MenuIcon
			}), d.a.createElement(x, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var n = o("./node_modules/react/index.js"),
				i = o.n(n),
				d = o("./src/higherOrderComponents/asTooltip.tsx"),
				a = o("./src/reddit/constants/elementIds.ts"),
				s = o("./src/reddit/contexts/InsideOverlay.tsx");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e, t) {
				const o = Object(d.a)(e, t);
				class n extends i.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(a.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return i.a.createElement(o, r({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(s.b)(n)
			}
		},
		"./src/reddit/reducers/features/devPlatform/index.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/redux/es/redux.js"),
				i = o("./src/lib/initializeClient/installReducer.ts"),
				d = o("./src/devPlatform/constants.ts");
			Object(i.a)({
				features: {
					devPlatform: l
				}
			});
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				const o = t.payload;
				switch (t.type) {
					case d.e:
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
						case d.e:
							return o.onAction;
						default:
							return e
					}
				},
				r = Object(n.c)({
					action: a,
					onAction: s
				}),
				l = t.a = Object(n.c)({
					userInputModal: r
				})
		},
		"ignored /drone/src/node_modules/cron-parser/lib fs": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/devPlatform-components-ContextActions.79e41e08cbfbd4751547.js.map