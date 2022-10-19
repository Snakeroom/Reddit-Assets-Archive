// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.5f94c8e80889795319a1.js
// Retrieved at 10/19/2022, 11:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards", "reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/endpoints/modQueue/modActivity.ts"),
				b = s("./src/reddit/helpers/graphql/helpers.ts"),
				v = s("./src/reddit/hooks/useGqlContext.ts"),
				p = s("./src/reddit/selectors/modQueue.ts"),
				h = s("./src/reddit/selectors/platform.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				C = s.n(f),
				O = s("./src/config.ts"),
				y = s("./node_modules/fbt/lib/FbtPublic.js"),
				S = s("./src/lib/timeAgo/index.ts"),
				x = s("./src/redditGQL/types.ts");
			const E = `${O.a.assetPath}/img/snoo-sunglasses.png`,
				j = e => {
					let {
						data: t
					} = e;
					var s, n, r, a, i, l, u;
					const m = (null === (s = t.info) || void 0 === s ? void 0 : s.displayName) || (null === (n = t.info) || void 0 === n ? void 0 : n.name),
						{
							lastModAction: v
						} = t;
					return d.a.createElement("div", {
						className: Object(o.a)(C.a.modRow, "hover:bg-neutral-background-hover"),
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, d.a.createElement(c.a, {
						className: C.a.modIcon,
						userName: m || "",
						iconUrl: null === (a = null === (r = null == t ? void 0 : t.info) || void 0 === r ? void 0 : r.icon) || void 0 === a ? void 0 : a.url,
						isNSFW: !!(null === (l = null === (i = t.info) || void 0 === i ? void 0 : i.profile) || void 0 === l ? void 0 : l.isNsfw)
					}), d.a.createElement("div", {
						className: C.a.subredditRowText
					}, d.a.createElement("div", {
						className: Object(o.a)(C.a.username, "text-neutral-content-strong")
					}, m), d.a.createElement("div", {
						className: Object(o.a)(C.a.detailText, "text-neutral-content-weak")
					}, v && d.a.createElement(d.a.Fragment, null, ((e, t) => {
						switch (e) {
							case x.u.AddNote:
								return y.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case x.u.AddRemovalReason:
								return y.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case x.u.AdjustPostCrowdControlLevel:
								return y.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case x.u.EnablePostCrowdControlFilter:
								return y.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case x.u.DisablePostCrowdControlFilter:
								return y.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case x.u.ApproveComment:
								return y.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case x.u.ApproveLink:
								return y.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case x.u.BanUser:
								return y.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case x.u.Collections:
								return y.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case x.u.DeleteNote:
								return y.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case x.u.Distinguish:
								return "SubredditPost" === t ? y.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : y.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case x.u.EditFlair:
								return "SubredditPost" === t ? y.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : y.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case x.u.IgnoreReports:
								return "SubredditPost" === t ? y.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : y.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case x.u.Lock:
								return "SubredditPost" === t ? y.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : y.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case x.u.MarkNsfw:
								return y.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case x.u.MarkOriginalContent:
								return y.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case x.u.MuteUser:
								return y.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case x.u.RemoveComment:
								return y.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case x.u.RemoveLink:
								return y.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case x.u.SetContestMode:
								return y.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case x.u.SetSuggestedsort:
								return y.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case x.u.ShowComment:
								return y.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case x.u.SpamComment:
								return y.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case x.u.SpamLink:
								return y.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case x.u.Spoiler:
								return y.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case x.u.Sticky:
								return "SubredditPost" === t ? y.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : y.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case x.u.UnbanUser:
								return y.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case x.u.Unlock:
								return "SubredditPost" === t ? y.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : y.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case x.u.UnmuteUser:
								return y.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case x.u.UnsetContestMode:
								return y.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case x.u.UnsnoozeReports:
								return "SubredditPost" === t ? y.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : y.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case x.u.Unspoiler:
								return y.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case x.u.Unsticky:
								return "SubredditPost" === t ? y.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : y.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case x.u.UpdateRemovalReason:
							case x.u.WikiBanned:
							case x.u.WikiContributor:
							case x.u.WikiPageListed:
							case x.u.WikiPermLevel:
							case x.u.WikiRevise:
							case x.u.WikiUnbanned:
							case x.u.AcceptModeratorInvite:
							case x.u.AddCommunityTopics:
							case x.u.AddContributor:
							case x.u.AddModerator:
							case x.u.CreateAward:
							case x.u.CreateScheduledPost:
							case x.u.CreateRemovalReason:
							case x.u.CommunityStyling:
							case x.u.CommunityWidgets:
							case x.u.CreateRule:
							case x.u.DeleteAward:
							case x.u.DeleteRule:
							case x.u.DeleteScheduledPost:
							case x.u.DeleteOverriddenClassification:
							case x.u.DeleteRemovalReason:
							case x.u.DisableAward:
							case x.u.EditPostRequirements:
							case x.u.EditRule:
							case x.u.EditScheduledPost:
							case x.u.EditSettings:
							case x.u.EnableAward:
							case x.u.Events:
							case x.u.HiddenAward:
							case x.u.InviteModerator:
							case x.u.InviteSubscriber:
							case x.u.ModAwardGiven:
							case x.u.ModmailEnrollment:
							case x.u.OverrideClassification:
							case x.u.RemoveCommunityTopics:
							case x.u.RemoveContributor:
							case x.u.RemoveModerator:
							case x.u.RemoveWikiContributor:
							case x.u.ReorderModerators:
							case x.u.ReorderRules:
							case x.u.SetPermissions:
							case x.u.SnoozeReports:
							case x.u.SubmitContentRatingSurvey:
							case x.u.SubmitScheduledPost:
							case x.u.UnignoreReports:
							case x.u.UninviteModerator:
							default:
								return y.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == v ? void 0 : v.action, null === (u = null == v ? void 0 : v.target) || void 0 === u ? void 0 : u.__typename), " ", Object(S.d)(Object(b.g)(v.createdAt) / 1e3)))))
				},
				A = e => {
					let {
						mostRecentAction: t
					} = e;
					return d.a.createElement("div", {
						className: C.a.emptyTooltip
					}, d.a.createElement("img", {
						alt: y.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: E,
						className: C.a.snooImage
					}), d.a.createElement("div", {
						className: Object(o.a)(C.a.emptyText, "text-neutral-content-strong")
					}, y.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), d.a.createElement("div", {
						className: Object(o.a)(C.a.emptyDetailText, "text-neutral-content-weak")
					}, y.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && d.a.createElement("div", {
						className: C.a.lastActionContainer
					}, d.a.createElement("div", {
						className: Object(o.a)(C.a.lastActionTitle, "text-neutral-content-weak")
					}, y.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), d.a.createElement(j, {
						data: t
					})))
				},
				w = e => {
					let {
						orderedModsList: t,
						subredditName: s,
						mods: n,
						mostRecentAction: r
					} = e;
					return 0 === t.length ? d.a.createElement(A, {
						mostRecentAction: r
					}) : d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
						className: Object(o.a)(C.a.tooltipTitle, "text-neutral-content-weak")
					}, t.length, " ", y.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [y.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), s), n && t.slice(0, 10).map(e => d.a.createElement(j, {
						data: n[e],
						key: e
					})), t.length > 10 && d.a.createElement("div", {
						className: Object(o.a)(C.a.detailText, C.a.more, "text-neutrtal-content-weak")
					}, "+", t.length - 10, " ", y.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				N = Object(n.a)(u.a),
				R = e => e ? Object.keys(e).sort((t, s) => ((e, t, s) => {
					var n, o, r, a;
					const d = null === (o = null === (n = s[e]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === o ? void 0 : o.createdAt,
						i = null === (a = null === (r = s[t]) || void 0 === r ? void 0 : r.lastModAction) || void 0 === a ? void 0 : a.createdAt,
						l = Object(b.g)(d || "");
					return Object(b.g)(i || "") - l
				})(t, s, e)).filter(t => {
					var s, n;
					return (new Date).getTime() - Object(b.g)((null === (n = null === (s = e[t]) || void 0 === s ? void 0 : s.lastModAction) || void 0 === n ? void 0 : n.createdAt) || "") < 15 * r.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: s,
					maxMods: n
				} = e;
				const r = Object(i.e)(h.c),
					u = s || r,
					b = Object(i.e)(e => Object(g.h)(e, {
						subredditId: u || ""
					})),
					f = Object(i.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[u || ""]) || {}
					}),
					{
						mods: O
					} = f,
					y = Object(a.useCallback)(e => R(e), [])(O),
					[S, x] = Object(a.useState)(void 0),
					E = Object(v.a)();
				Object(a.useEffect)(() => {
					(async () => {
						var e, t, s, n;
						if (0 === y.length && b) {
							const o = null === (t = null === (e = (await Object(m.a)(E(), {
								subredditName: b
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == o ? void 0 : o.actions) && (null === (n = null === (s = o.actions) || void 0 === s ? void 0 : s.edges) || void 0 === n || n.map(e => {
								const {
									moderatorInfo: t,
									...s
								} = null == e ? void 0 : e.node;
								"reddit" !== (null == t ? void 0 : t.name) && "automoderator" !== (null == t ? void 0 : t.name) && x({
									info: t,
									lastModAction: s
								})
							}))
						}
					})()
				}, [E, y.length, b]);
				const j = (e => `mod_activity_tooltip_id-${e}`)(b || ""),
					A = Object(i.d)(),
					T = Object(a.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), A(Object(l.h)({
							tooltipId: j
						}))
					}, [A, j]),
					P = Object(i.e)(e => Object(_.b)(j)(e)),
					M = Object(i.e)(p.d),
					I = Object(i.e)(k.k),
					D = n || 5;
				return d.a.createElement("div", {
					className: Object(o.a)(C.a.preview, t),
					id: j,
					onClick: T,
					"data-testid": "mod-activity-preview"
				}, O && y.length > 0 ? y.slice(0, D).map((e, t) => {
					var s, n, r, a, i, l, u, m, b, v;
					return d.a.createElement(c.a, {
						className: Object(o.a)(C.a.userIcon, {
							[C.a.noMargin]: t === y.length - 1 && !(t === D - 1 && y.length > D)
						}),
						key: null === (n = null === (s = O[e]) || void 0 === s ? void 0 : s.info) || void 0 === n ? void 0 : n.displayName,
						userName: (null === (a = null === (r = O[e]) || void 0 === r ? void 0 : r.info) || void 0 === a ? void 0 : a.displayName) || "",
						iconUrl: null === (u = null === (l = null === (i = O[e]) || void 0 === i ? void 0 : i.info) || void 0 === l ? void 0 : l.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (v = null === (b = null === (m = O[e]) || void 0 === m ? void 0 : m.info) || void 0 === b ? void 0 : b.profile) || void 0 === v ? void 0 : v.isNsfw)
					})
				}) : M ? null : d.a.createElement(c.a, {
					className: Object(o.a)(C.a.userIcon, C.a.noMargin),
					userName: (null == I ? void 0 : I.displayName) || "",
					iconUrl: null == I ? void 0 : I.accountIcon,
					isNSFW: !1
				}), y.length > D && d.a.createElement("div", {
					className: Object(o.a)(C.a.moreMods, "text-neutral-content-weak")
				}, "+", y.length - D), d.a.createElement(N, {
					tooltipId: j,
					isOpen: P,
					className: C.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, d.a.createElement(w, {
					orderedModsList: y,
					subredditName: b || "",
					mods: O,
					mostRecentAction: S
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ModQueueActivitySummaryCards/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SNOO_NO_MOUTH_IMAGE_PATH", (function() {
				return A
			})), s.d(t, "SNOO_THUMBS_UP_IMAGE_PATH", (function() {
				return w
			})), s.d(t, "INACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return T
			})), s.d(t, "ACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return P
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/filterQueryParams/index.ts"),
				m = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/helpers/graphql/helpers.ts"),
				k = s("./src/reddit/hooks/useLocalStorage.ts"),
				f = s("./src/reddit/hooks/usePageLayer.ts"),
				C = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				O = s("./src/reddit/selectors/meta.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				x = s.n(S),
				E = s("./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const A = `${n.a.assetPath}/img/snoo-no-mouth.png`,
				w = `${n.a.assetPath}/img/snoo-thumbs-up.png`,
				N = e => {
					let {
						subredditId: t,
						activityData: s,
						origin: n,
						currentPageUrl: r
					} = e;
					var c;
					const b = Object(d.e)(e => Object(y.X)(e, {
						subredditId: t
					}));
					return a.a.createElement(g.default, {
						className: Object(l.a)(x.a.subredditRow, "hover:bg-neutral-background-hover"),
						key: null == b ? void 0 : b.displayText,
						to: Object(i.a)(Object(u.a)(`${n}${r}`, ["after", "before", "page", "profile", "subreddit"]), {
							subreddit: null == b ? void 0 : b.name
						})
					}, a.a.createElement(v.b, {
						className: x.a.subredditIcon,
						iconUrl: "",
						subredditOrProfile: b
					}), a.a.createElement("div", {
						className: x.a.subredditRowText
					}, a.a.createElement("div", {
						className: Object(l.a)(x.a.subredditName, "text-neutral-content-strong")
					}, null == b ? void 0 : b.displayText), a.a.createElement("div", {
						className: Object(l.a)(x.a.detailText, "text-neutral-content-weak")
					}, (null === (c = null == s ? void 0 : s.sub) || void 0 === c ? void 0 : c.lastModActionAt) ? a.a.createElement(a.a.Fragment, null, o.fbt._("Last action", null, {
						hk: "2lt40w"
					}), " ", Object(m.d)(Object(_.g)(s.sub.lastModActionAt) / 1e3)) : o.fbt._("No recent actions", null, {
						hk: "1qiZq9"
					}))), a.a.createElement(E.default, {
						subredditId: t,
						maxMods: 3
					}))
				},
				R = e => {
					let {
						subredditIdsList: t,
						totalSubs: s,
						modActivitySummaryData: n,
						isActive: r,
						origin: d,
						currentPageUrl: i,
						isCollapsed: u,
						setIsCollapsed: m
					} = e;
					const b = t.sort((e, t) => ((e, t, s) => {
						var n, o, r, a;
						const d = Object(_.g)(null === (o = null === (n = s[e]) || void 0 === n ? void 0 : n.sub) || void 0 === o ? void 0 : o.lastModActionAt),
							i = Object(_.g)(null === (a = null === (r = s[t]) || void 0 === r ? void 0 : r.sub) || void 0 === a ? void 0 : a.lastModActionAt);
						return d > i ? -1 : d < i ? 1 : 0
					})(e, t, n)).filter(e => {
						var t, s;
						return !r || (new Date).getTime() - Object(_.g)((null === (s = null === (t = n[e]) || void 0 === t ? void 0 : t.sub) || void 0 === s ? void 0 : s.lastModActionAt) || "") < 15 * c.pb
					}).slice(0, 10);
					return a.a.createElement(p.a, {
						title: a.a.createElement("div", {
							className: x.a.titleContainer
						}, r ? o.fbt._("Actively being moderated", null, {
							hk: "43BqG4"
						}) : o.fbt._("Inactive", null, {
							hk: "1MbMLw"
						})),
						className: x.a.widget,
						contentOnly: !0,
						headerButton: a.a.createElement("div", {
							className: x.a.headerButtonContainer
						}, a.a.createElement(C.a, {
							className: Object(l.a)(x.a.headerButtonIcon, {
								[x.a.up]: u
							}, "text-neutral-content-strong")
						})),
						headerStyles: {
							borderRadius: 4
						},
						onHeaderClick: () => m(u ? "false" : "true"),
						redditStyle: !0
					}, !u && a.a.createElement("div", {
						className: x.a.widgetContent
					}, 0 === b.length && a.a.createElement("div", {
						className: x.a.emptyCard
					}, a.a.createElement("img", {
						alt: o.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: r ? A : w,
						className: x.a.snooImage
					}), a.a.createElement("div", {
						className: Object(l.a)(x.a.emptyText, "text-neutral-content-strong")
					}, r ? o.fbt._("No communities are being moderated", null, {
						hk: "1cAhYD"
					}) : o.fbt._("It’s all covered", null, {
						hk: "32tVnu"
					})), a.a.createElement("div", {
						className: Object(l.a)(x.a.emptyDetailText, "text-neutral-content-weak")
					}, r ? o.fbt._("Look up above at the “inactive” section to see what communities might moderation.", null, {
						hk: "22ka9V"
					}) : o.fbt._("Jump into the “actively being moderated” section below to see where else you could jump in.", null, {
						hk: "2t7nuw"
					}))), b.map(e => {
						const t = n[e];
						return a.a.createElement(N, {
							key: e,
							subredditId: e,
							activityData: t,
							origin: d,
							currentPageUrl: i
						})
					}), s > 10 && a.a.createElement("div", {
						className: Object(l.a)(x.a.detailText, x.a.more, "text-neutral-content-weak")
					}, "+", s - 10, " ", r ? o.fbt._("more being moderated", null, {
						hk: "2tAu2k"
					}) : o.fbt._("more not being moderated", null, {
						hk: "1Djx0e"
					}))))
				},
				T = "inactive_mod_summaries_collapsed",
				P = "active_mod_summaries_collapsed";
			t.default = () => {
				const e = Object(d.e)(e => {
						var t;
						return null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries
					}) || {},
					t = [],
					s = [];
				let n = 0,
					o = 0;
				Object.keys(e).map(r => {
					e[r].sub.activeMods.length > 0 ? (n < 10 && t.push(r), n++) : (o < 10 && s.push(r), o++)
				});
				const r = Object(d.e)(O.k),
					i = Object(f.a)(),
					l = {
						origin: r,
						currentPageUrl: Object(h.f)(i),
						modActivitySummaryData: e
					},
					[c, u] = Object(k.a)(T, "true"),
					[m, v] = Object(k.a)(P, "true");
				return a.a.createElement("span", {
					"data-testid": "mod-activity-cards"
				}, a.a.createElement(b.a, null, a.a.createElement(R, j({
					subredditIdsList: s,
					totalSubs: o,
					isCollapsed: "true" === c,
					setIsCollapsed: u
				}, l))), a.a.createElement(b.a, null, a.a.createElement(R, j({
					isActive: !0,
					subredditIdsList: t,
					totalSubs: n,
					isCollapsed: "true" === m,
					setIsCollapsed: v
				}, l))))
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/SEOTitle/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/widgets.ts"),
				v = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				p = s("./src/reddit/selectors/experiments/topPosts.ts"),
				h = s("./src/reddit/selectors/structuredStyles.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/models/Theme/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const f = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(k.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(k.a)(e).widgetColors.sidebarWidgetHeaderColor,
				O = e => {
					const t = f(e);
					return Object(_.f)(t)
				},
				y = e => {
					const t = C(e);
					return Object(_.f)(t)
				};
			var S = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				x = s.n(S);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.u)(), A = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.n)(e, t) || void 0,
						n = t.redditStyle || Object(h.l)(e, {
							subredditId: s
						}),
						o = Object(g.db)(e);
					return n || o
				},
				nigtmode: g.db,
				subredditId: u.n,
				topPostVariant: p.d
			}));
			class w extends o.a.Component {
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
					return e.backgroundColor = f(this.props), e.borderColor = Object(v.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = O(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = y(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						id: a,
						onClick: i,
						onHeaderClick: c,
						title: u,
						titleClassName: b,
						truncateThreshold: v
					} = this.props, p = s ? x.a.widgetContentOnly : x.a.widgetContent, h = !n && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, _ = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(d.a)(t, x.a.widgetBackground, {
							[x.a.redditStyle]: n,
							[x.a.clickable]: !!i,
							[x.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: i,
						style: g
					}, u && o.a.createElement("div", {
						className: Object(d.a)(x.a.widgetHeader, {
							[x.a.clickable]: !!c
						}),
						id: a,
						style: {
							..._,
							...this.props.headerStyles
						},
						onClick: c
					}, o.a.createElement("div", {
						className: Object(d.a)(x.a.widgetTitle, b)
					}, o.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), r), o.a.createElement("div", {
						className: Object(d.a)(p, {
							[x.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? v : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(m.r, {
						className: x.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, E._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(A(Object(i.a)(Object(c.c)(w))))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return c
			}));
			var n, o, r = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const d = (e, t) => s => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(a.xb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				i = (e, t) => s => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: a.K(s, e),
					subreddit: a.jb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...a.o(s)
				}),
				l = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...a.o(e)
				}),
				c = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: n.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.5f94c8e80889795319a1.js.map