// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.061b2b4b7c5ab1509792.js
// Retrieved at 10/10/2022, 7:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards", "reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/higherOrderComponents/asTooltip.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./node_modules/react/index.js"),
				d = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/components/UserIcon/index.tsx"),
				u = r("./src/reddit/controls/Dropdown/index.tsx"),
				m = r("./src/reddit/endpoints/modQueue/modActivity.ts"),
				b = r("./src/reddit/helpers/graphql/helpers.ts"),
				v = r("./src/reddit/hooks/useGqlContext.ts"),
				p = r("./src/reddit/selectors/modQueue.ts"),
				h = r("./src/reddit/selectors/platform.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/tooltip.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				k = r("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				C = r.n(k),
				y = r("./src/config.ts"),
				S = r("./node_modules/fbt/lib/FbtPublic.js"),
				E = r("./src/lib/timeAgo/index.ts"),
				O = r("./src/redditGQL/types.ts");
			const x = `${y.a.assetPath}/img/snoo-sunglasses.png`,
				A = e => {
					let {
						data: t
					} = e;
					var r, s, o, n, a, i, l;
					const u = (null === (r = t.info) || void 0 === r ? void 0 : r.displayName) || (null === (s = t.info) || void 0 === s ? void 0 : s.name),
						{
							lastModAction: m
						} = t;
					return d.a.createElement("div", {
						className: C.a.modRow,
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, d.a.createElement(c.a, {
						className: C.a.modIcon,
						userName: u || "",
						iconUrl: null === (n = null === (o = null == t ? void 0 : t.info) || void 0 === o ? void 0 : o.icon) || void 0 === n ? void 0 : n.url,
						isNSFW: !!(null === (i = null === (a = t.info) || void 0 === a ? void 0 : a.profile) || void 0 === i ? void 0 : i.isNsfw)
					}), d.a.createElement("div", {
						className: C.a.subredditRowText
					}, d.a.createElement("div", {
						className: C.a.username
					}, u), d.a.createElement("div", {
						className: C.a.detailText
					}, m && d.a.createElement(d.a.Fragment, null, ((e, t) => {
						switch (e) {
							case O.r.AddNote:
								return S.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case O.r.AddRemovalReason:
								return S.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case O.r.AdjustPostCrowdControlLevel:
								return S.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case O.r.EnablePostCrowdControlFilter:
								return S.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case O.r.DisablePostCrowdControlFilter:
								return S.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case O.r.ApproveComment:
								return S.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case O.r.ApproveLink:
								return S.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case O.r.BanUser:
								return S.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case O.r.Collections:
								return S.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case O.r.DeleteNote:
								return S.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case O.r.Distinguish:
								return "SubredditPost" === t ? S.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : S.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case O.r.EditFlair:
								return "SubredditPost" === t ? S.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : S.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case O.r.IgnoreReports:
								return "SubredditPost" === t ? S.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : S.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case O.r.Lock:
								return "SubredditPost" === t ? S.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : S.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case O.r.MarkNsfw:
								return S.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case O.r.MarkOriginalContent:
								return S.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case O.r.MuteUser:
								return S.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case O.r.RemoveComment:
								return S.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case O.r.RemoveLink:
								return S.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case O.r.SetContestMode:
								return S.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case O.r.SetSuggestedsort:
								return S.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case O.r.ShowComment:
								return S.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case O.r.SpamComment:
								return S.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case O.r.SpamLink:
								return S.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case O.r.Spoiler:
								return S.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case O.r.Sticky:
								return "SubredditPost" === t ? S.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : S.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case O.r.UnbanUser:
								return S.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case O.r.Unlock:
								return "SubredditPost" === t ? S.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : S.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case O.r.UnmuteUser:
								return S.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case O.r.UnsetContestMode:
								return S.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case O.r.UnsnoozeReports:
								return "SubredditPost" === t ? S.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : S.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case O.r.Unspoiler:
								return S.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case O.r.Unsticky:
								return "SubredditPost" === t ? S.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : S.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case O.r.UpdateRemovalReason:
							case O.r.WikiBanned:
							case O.r.WikiContributor:
							case O.r.WikiPageListed:
							case O.r.WikiPermLevel:
							case O.r.WikiRevise:
							case O.r.WikiUnbanned:
							case O.r.AcceptModeratorInvite:
							case O.r.AddCommunityTopics:
							case O.r.AddContributor:
							case O.r.AddModerator:
							case O.r.CreateAward:
							case O.r.CreateScheduledPost:
							case O.r.CreateRemovalReason:
							case O.r.CommunityStyling:
							case O.r.CommunityWidgets:
							case O.r.CreateRule:
							case O.r.DeleteAward:
							case O.r.DeleteRule:
							case O.r.DeleteScheduledPost:
							case O.r.DeleteOverriddenClassification:
							case O.r.DeleteRemovalReason:
							case O.r.DisableAward:
							case O.r.EditPostRequirements:
							case O.r.EditRule:
							case O.r.EditScheduledPost:
							case O.r.EditSettings:
							case O.r.EnableAward:
							case O.r.Events:
							case O.r.HiddenAward:
							case O.r.InviteModerator:
							case O.r.InviteSubscriber:
							case O.r.ModAwardGiven:
							case O.r.ModmailEnrollment:
							case O.r.OverrideClassification:
							case O.r.RemoveCommunityTopics:
							case O.r.RemoveContributor:
							case O.r.RemoveModerator:
							case O.r.RemoveWikiContributor:
							case O.r.ReorderModerators:
							case O.r.ReorderRules:
							case O.r.SetPermissions:
							case O.r.SnoozeReports:
							case O.r.SubmitContentRatingSurvey:
							case O.r.SubmitScheduledPost:
							case O.r.UnignoreReports:
							case O.r.UninviteModerator:
							default:
								return S.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == m ? void 0 : m.action, null === (l = null == m ? void 0 : m.target) || void 0 === l ? void 0 : l.__typename), " ", Object(E.d)(Object(b.g)(m.createdAt) / 1e3)))))
				},
				j = e => {
					let {
						mostRecentAction: t
					} = e;
					return d.a.createElement("div", {
						className: C.a.emptyTooltip
					}, d.a.createElement("img", {
						alt: S.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: x,
						className: C.a.snooImage
					}), d.a.createElement("div", {
						className: C.a.emptyText
					}, S.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), d.a.createElement("div", {
						className: C.a.emptyDetailText
					}, S.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && d.a.createElement("div", {
						className: C.a.lastActionContainer
					}, d.a.createElement("div", {
						className: C.a.lastActionTitle
					}, S.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), d.a.createElement(A, {
						data: t
					})))
				},
				N = e => {
					let {
						orderedModsList: t,
						subredditName: r,
						mods: s,
						mostRecentAction: n
					} = e;
					return 0 === t.length ? d.a.createElement(j, {
						mostRecentAction: n
					}) : d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
						className: C.a.tooltipTitle
					}, t.length, " ", S.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [S.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), r), s && t.slice(0, 10).map(e => d.a.createElement(A, {
						data: s[e],
						key: e
					})), t.length > 10 && d.a.createElement("div", {
						className: Object(o.a)(C.a.detailText, C.a.more)
					}, "+", t.length - 10, " ", S.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				w = Object(s.a)(u.a),
				R = e => e ? Object.keys(e).sort((t, r) => ((e, t, r) => {
					var s, o, n, a;
					const d = null === (o = null === (s = r[e]) || void 0 === s ? void 0 : s.lastModAction) || void 0 === o ? void 0 : o.createdAt,
						i = null === (a = null === (n = r[t]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === a ? void 0 : a.createdAt,
						l = Object(b.g)(d || "");
					return Object(b.g)(i || "") - l
				})(t, r, e)).filter(t => {
					var r, s;
					return (new Date).getTime() - Object(b.g)((null === (s = null === (r = e[t]) || void 0 === r ? void 0 : r.lastModAction) || void 0 === s ? void 0 : s.createdAt) || "") < 15 * n.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: r,
					maxMods: s
				} = e;
				const n = Object(i.e)(h.c),
					u = r || n,
					b = Object(i.e)(e => Object(g.h)(e, {
						subredditId: u || ""
					})),
					k = Object(i.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[u || ""]) || {}
					}),
					{
						mods: y
					} = k,
					S = Object(a.useCallback)(e => R(e), [])(y),
					[E, O] = Object(a.useState)(void 0),
					x = Object(v.a)();
				Object(a.useEffect)(() => {
					(async () => {
						var e, t, r, s;
						if (0 === S.length && b) {
							const o = null === (t = null === (e = (await Object(m.a)(x(), {
								subredditName: b
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == o ? void 0 : o.actions) && (null === (s = null === (r = o.actions) || void 0 === r ? void 0 : r.edges) || void 0 === s || s.map(e => {
								const {
									moderatorInfo: t,
									...r
								} = null == e ? void 0 : e.node;
								"reddit" !== (null == t ? void 0 : t.name) && "automoderator" !== (null == t ? void 0 : t.name) && O({
									info: t,
									lastModAction: r
								})
							}))
						}
					})()
				}, [x, S.length, b]);
				const A = (e => `mod_activity_tooltip_id-${e}`)(b || ""),
					j = Object(i.d)(),
					P = Object(a.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), j(Object(l.h)({
							tooltipId: A
						}))
					}, [j, A]),
					T = Object(i.e)(e => Object(_.b)(A)(e)),
					M = Object(i.e)(p.d),
					I = Object(i.e)(f.k),
					D = s || 5;
				return d.a.createElement("div", {
					className: Object(o.a)(C.a.preview, t),
					id: A,
					onClick: P,
					"data-testid": "mod-activity-preview"
				}, y && S.length > 0 ? S.slice(0, D).map((e, t) => {
					var r, s, n, a, i, l, u, m, b, v;
					return d.a.createElement(c.a, {
						className: Object(o.a)(C.a.userIcon, {
							[C.a.noMargin]: t === S.length - 1 && !(t === D - 1 && S.length > D)
						}),
						key: null === (s = null === (r = y[e]) || void 0 === r ? void 0 : r.info) || void 0 === s ? void 0 : s.displayName,
						userName: (null === (a = null === (n = y[e]) || void 0 === n ? void 0 : n.info) || void 0 === a ? void 0 : a.displayName) || "",
						iconUrl: null === (u = null === (l = null === (i = y[e]) || void 0 === i ? void 0 : i.info) || void 0 === l ? void 0 : l.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (v = null === (b = null === (m = y[e]) || void 0 === m ? void 0 : m.info) || void 0 === b ? void 0 : b.profile) || void 0 === v ? void 0 : v.isNsfw)
					})
				}) : M ? null : d.a.createElement(c.a, {
					className: Object(o.a)(C.a.userIcon, C.a.noMargin),
					userName: (null == I ? void 0 : I.displayName) || "",
					iconUrl: null == I ? void 0 : I.accountIcon,
					isNSFW: !1
				}), S.length > D && d.a.createElement("div", {
					className: C.a.moreMods
				}, "+", S.length - D), d.a.createElement(w, {
					tooltipId: A,
					isOpen: T,
					className: C.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, d.a.createElement(N, {
					orderedModsList: S,
					subredditName: b || "",
					mods: y,
					mostRecentAction: E
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, r) {
			e.exports = {
				widget: "_2S3Rmz2Q8AgpyxfJD6L9Ni",
				titleContainer: "pg3jNvZKVsr3JdwcUwg2Q",
				widgetContent: "k9g6oop3qzXe5kYHchR2G",
				modIcon: "_3_ODW9yvfhSXaAyu-nkEVf",
				subredditIcon: "_3xHqnRKD2oZKVSbBsrhnhK",
				modRow: "_5sL4TmBPDSK5a3KCST8_D",
				subredditRow: "_13BVggQ6qexDLjYZd0OF_G",
				subredditRowText: "_251DNBern7Si-he5HNkDm7",
				emptyCard: "_1Df-DRjGp1nY8gKsqVuIWB",
				emptyText: "_25rN30WWKtFVSZo9ZhYJLx",
				subredditName: "_1-JqcOMFgfEZRr9C1rwtvN",
				tooltipTitle: "Edh6iORXd4A_ZV0h1CB8j",
				username: "_3iBG4sU_nNewURNnz2rmHn",
				emptyDetailText: "_138KBSl-Hzt-QdKbcCX4tv",
				detailText: "_1rZ6aZqtR9nzTvKOqVb7dP",
				snooImage: "Vg69__zCqDdWEkb_CTQcn",
				headerButtonContainer: "EzEg04ghsOqxnE1GnfnIr",
				headerButtonIcon: "yga1BOrh_Ki70reuqnYLi",
				up: "B30eRoRGRtXKAX8-rAmXV",
				more: "_22P9QU0SjkaqhoKGnofYXo",
				preview: "_2akotn_qPD4--TkwhPFyTR",
				moreMods: "NbzlGrDvVUNrngQOyDY28",
				userIcon: "_1hC77l9y_LwLvok2bogZDP",
				noMargin: "_3K_wetbUvC8wNm6ueBwvh-",
				tooltip: "kRLDbyQSWoBrnkmHt5nmj",
				emptyTooltip: "_1yrR_PVgnpPVl0FS5aNxmY",
				lastActionContainer: "rU1nWYL0Qtmi0poIUJXmm",
				lastActionTitle: "_2bxj74obMqZ-SI9UrnCg7x"
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "SNOO_NO_MOUTH_IMAGE_PATH", (function() {
				return j
			})), r.d(t, "SNOO_THUMBS_UP_IMAGE_PATH", (function() {
				return N
			})), r.d(t, "INACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return P
			})), r.d(t, "ACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return T
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				d = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/addQueryParams/index.ts"),
				l = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/filterQueryParams/index.ts"),
				m = r("./src/lib/timeAgo/index.ts"),
				b = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = r("./src/reddit/components/SubredditIcon/index.tsx"),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				g = r("./src/reddit/controls/InternalLink/index.tsx"),
				_ = r("./src/reddit/helpers/graphql/helpers.ts"),
				f = r("./src/reddit/hooks/useLocalStorage.ts"),
				k = r("./src/reddit/hooks/usePageLayer.ts"),
				C = r("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				y = r("./src/reddit/selectors/meta.ts"),
				S = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				O = r.n(E),
				x = r("./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = `${s.a.assetPath}/img/snoo-no-mouth.png`,
				N = `${s.a.assetPath}/img/snoo-thumbs-up.png`,
				w = e => {
					let {
						subredditId: t,
						activityData: r,
						origin: s,
						currentPageUrl: n
					} = e;
					var l;
					const c = Object(d.e)(e => Object(S.X)(e, {
						subredditId: t
					}));
					return a.a.createElement(g.default, {
						className: O.a.subredditRow,
						key: null == c ? void 0 : c.displayText,
						to: Object(i.a)(Object(u.a)(`${s}${n}`, ["after", "before", "page", "profile", "subreddit"]), {
							subreddit: null == c ? void 0 : c.name
						})
					}, a.a.createElement(v.b, {
						className: O.a.subredditIcon,
						iconUrl: "",
						subredditOrProfile: c
					}), a.a.createElement("div", {
						className: O.a.subredditRowText
					}, a.a.createElement("div", {
						className: O.a.subredditName
					}, null == c ? void 0 : c.displayText), a.a.createElement("div", {
						className: O.a.detailText
					}, (null === (l = null == r ? void 0 : r.sub) || void 0 === l ? void 0 : l.lastModActionAt) ? a.a.createElement(a.a.Fragment, null, o.fbt._("Last action", null, {
						hk: "2lt40w"
					}), " ", Object(m.d)(Object(_.g)(r.sub.lastModActionAt) / 1e3)) : o.fbt._("No recent actions", null, {
						hk: "1qiZq9"
					}))), a.a.createElement(x.default, {
						subredditId: t,
						maxMods: 3
					}))
				},
				R = e => {
					let {
						subredditIdsList: t,
						totalSubs: r,
						modActivitySummaryData: s,
						isActive: n,
						origin: d,
						currentPageUrl: i,
						isCollapsed: u,
						setIsCollapsed: m
					} = e;
					const b = t.sort((e, t) => ((e, t, r) => {
						var s, o, n, a;
						const d = Object(_.g)(null === (o = null === (s = r[e]) || void 0 === s ? void 0 : s.sub) || void 0 === o ? void 0 : o.lastModActionAt),
							i = Object(_.g)(null === (a = null === (n = r[t]) || void 0 === n ? void 0 : n.sub) || void 0 === a ? void 0 : a.lastModActionAt);
						return d > i ? -1 : d < i ? 1 : 0
					})(e, t, s)).filter(e => {
						var t, r;
						return !n || (new Date).getTime() - Object(_.g)((null === (r = null === (t = s[e]) || void 0 === t ? void 0 : t.sub) || void 0 === r ? void 0 : r.lastModActionAt) || "") < 15 * c.pb
					}).slice(0, 10);
					return a.a.createElement(p.a, {
						title: a.a.createElement("div", {
							className: O.a.titleContainer
						}, n ? o.fbt._("Actively being moderated", null, {
							hk: "43BqG4"
						}) : o.fbt._("Inactive", null, {
							hk: "1MbMLw"
						})),
						className: O.a.widget,
						contentOnly: !0,
						headerButton: a.a.createElement("div", {
							className: O.a.headerButtonContainer
						}, a.a.createElement(C.a, {
							className: Object(l.a)(O.a.headerButtonIcon, {
								[O.a.up]: u
							})
						})),
						headerStyles: {
							borderRadius: 4
						},
						onHeaderClick: () => m(u ? "false" : "true"),
						redditStyle: !0
					}, !u && a.a.createElement("div", {
						className: O.a.widgetContent
					}, 0 === b.length && a.a.createElement("div", {
						className: O.a.emptyCard
					}, a.a.createElement("img", {
						alt: o.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: n ? j : N,
						className: O.a.snooImage
					}), a.a.createElement("div", {
						className: O.a.emptyText
					}, n ? o.fbt._("No communities are being moderated", null, {
						hk: "1cAhYD"
					}) : o.fbt._("It’s all covered", null, {
						hk: "32tVnu"
					})), a.a.createElement("div", {
						className: O.a.emptyDetailText
					}, n ? o.fbt._("Look up above at the “inactive” section to see what communities might moderation.", null, {
						hk: "22ka9V"
					}) : o.fbt._("Jump into the “actively being moderated” section below to see where else you could jump in.", null, {
						hk: "2t7nuw"
					}))), b.map(e => {
						const t = s[e];
						return a.a.createElement(w, {
							key: e,
							subredditId: e,
							activityData: t,
							origin: d,
							currentPageUrl: i
						})
					}), r > 10 && a.a.createElement("div", {
						className: Object(l.a)(O.a.detailText, O.a.more)
					}, "+", r - 10, " ", n ? o.fbt._("more being moderated", null, {
						hk: "2tAu2k"
					}) : o.fbt._("more not being moderated", null, {
						hk: "1Djx0e"
					}))))
				},
				P = "inactive_mod_summaries_collapsed",
				T = "active_mod_summaries_collapsed";
			t.default = () => {
				const e = Object(d.e)(e => {
						var t;
						return null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries
					}) || {},
					t = [],
					r = [];
				let s = 0,
					o = 0;
				Object.keys(e).map(n => {
					e[n].sub.activeMods.length > 0 ? (s < 10 && t.push(n), s++) : (o < 10 && r.push(n), o++)
				});
				const n = Object(d.e)(y.k),
					i = Object(k.a)(),
					l = {
						origin: n,
						currentPageUrl: Object(h.f)(i),
						modActivitySummaryData: e
					},
					[c, u] = Object(f.a)(P, "true"),
					[m, v] = Object(f.a)(T, "true");
				return a.a.createElement("span", {
					"data-testid": "mod-activity-cards"
				}, a.a.createElement(b.a, null, a.a.createElement(R, A({
					subredditIdsList: r,
					totalSubs: o,
					isCollapsed: "true" === c,
					setIsCollapsed: u
				}, l))), a.a.createElement(b.a, null, a.a.createElement(R, A({
					isActive: !0,
					subredditIdsList: t,
					totalSubs: s,
					isCollapsed: "true" === m,
					setIsCollapsed: v
				}, l))))
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, r) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = r.n(s),
				n = r("./src/lib/lessComponent.tsx");
			t.a = n.a.div("Component", o.a)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, r) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/reddit/components/SEOTitle/index.tsx"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/helpers/trackers/widgets.ts"),
				v = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				p = r("./src/reddit/selectors/experiments/topPosts.ts"),
				h = r("./src/reddit/selectors/structuredStyles.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/models/Theme/index.ts"),
				f = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const k = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(f.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(f.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = k(e);
					return Object(_.f)(t)
				},
				S = e => {
					const t = C(e);
					return Object(_.f)(t)
				};
			var E = r("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = r.n(E);
			const {
				fbt: x
			} = r("./node_modules/fbt/lib/FbtPublic.js"), A = Object(u.u)(), j = Object(n.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const r = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(h.l)(e, {
							subredditId: r
						}),
						o = Object(g.db)(e);
					return s || o
				},
				nigtmode: g.db,
				subredditId: u.n,
				topPostVariant: p.d
			}));
			class N extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(b.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = k(this.props), e.borderColor = Object(v.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = S(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: r,
						forceRedditStyle: s,
						headerButton: n,
						id: a,
						onClick: i,
						onHeaderClick: c,
						title: u,
						titleClassName: b,
						truncateThreshold: v
					} = this.props, p = r ? O.a.widgetContentOnly : O.a.widgetContent, h = !s && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, _ = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(d.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: s,
							[O.a.clickable]: !!i,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: i,
						style: g
					}, u && o.a.createElement("div", {
						className: Object(d.a)(O.a.widgetHeader, {
							[O.a.clickable]: !!c
						}),
						id: a,
						style: {
							..._,
							...this.props.headerStyles
						},
						onClick: c
					}, o.a.createElement("div", {
						className: Object(d.a)(O.a.widgetTitle, b)
					}, o.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), n), o.a.createElement("div", {
						className: Object(d.a)(p, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? v : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(m.r, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, x._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = A(j(Object(i.a)(Object(c.c)(N))))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return c
			}));
			var s, o, n = r("./src/reddit/constants/tracking.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const d = (e, t) => r => ({
					source: o.COMMUNITY_WIDGETS,
					action: n.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.xb)(r, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				i = (e, t) => r => ({
					source: o.POST,
					action: n.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.K(r, e),
					subreddit: a.jb(r),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.o(r)
				}),
				l = () => e => ({
					source: o.SIDEBAR,
					action: n.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.o(e)
				}),
				c = e => t => ({
					source: o.TOPICS_WIDGET,
					action: n.c.CLICK,
					noun: s.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.eb
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.061b2b4b7c5ab1509792.js.map